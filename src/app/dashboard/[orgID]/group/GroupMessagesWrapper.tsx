'use client';
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import { useGetGroupMessagesQuery } from "@/services/messages";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectActiveDepartment } from "@/lib/features/uiSlice";
import {
  selectMessagesByKey,
  setMessages
} from "@/lib/features/messageSlice";
import Messages from "@/components/dashboard/Messages";
import useSocket from "@/lib/hooks/useSocket";

const PostsWrapper = withContentWrapper(Messages, true);

export default function GroupMessagesWrapper() {
  const socket = useSocket();
  const {data: session} = useSession();
  const dispatch = useAppDispatch();
  const activeDept = useAppSelector(selectActiveDepartment);
  const msgKey = `group-${activeDept?.id}`;
  const messages = useAppSelector((state) => selectMessagesByKey(state, msgKey));

  // Fetch Group messages if there are no messages in the store
  const {
    data: groupMessages,
    isLoading: isGroupMessagesLoading,
    isError: isGroupMessagesError
  } = useGetGroupMessagesQuery(
    activeDept.id,
    {skip: messages.length > 0});

  useEffect(() => {
    if (groupMessages && !isGroupMessagesLoading && !isGroupMessagesError) {
      dispatch(setMessages({
        key: msgKey,
        value: groupMessages.response
      }));
    }
  }, [
    dispatch,
    groupMessages,
    isGroupMessagesLoading,
    isGroupMessagesError,
    msgKey
  ]);

  useEffect(() => {
    if (activeDept && socket) {
      socket.emit("join-department", activeDept.id);
    }
  }, [activeDept, socket]);

  const handleSend = async (message: string) => {
    try {
      socket.emit("groupMessage",
        {
          senderId: session?.user.id as string,
          departmentId: activeDept?.id,
          content: message
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (<PostsWrapper
      messages={messages}
      isLoading={isGroupMessagesLoading}
      isLoadingMore={false}
      onSend={handleSend}
  />);
}