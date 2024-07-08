'use client';
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import { useGetGroupMessagesQuery, usePostGroupMessageMutation } from "@/services/messages";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectActiveDepartment } from "@/lib/features/uiSlice";
import {
  addMessage,
  selectMessagesByKey,
  setMessages
} from "@/lib/features/messageSlice";
import Messages from "@/components/dashboard/Messages";

const PostsWrapper = withContentWrapper(Messages, true);

export default function GroupMessagesWrapper() {
  const {data: session} = useSession();
  const [postGroupMessage, { isLoading: isSending }] = usePostGroupMessageMutation();
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
        value: groupMessages.messages
      }));
    }
  }, [
    dispatch,
    groupMessages,
    isGroupMessagesLoading,
    isGroupMessagesError,
    msgKey
  ]);
    const handleSend = async (message: string) => {
      try {      
        const res = await postGroupMessage({
          senderId: session?.user.id as string,
          departmentId: activeDept?.id,
          content: message
        }).unwrap();
        
        if (res.isSuccess && !isSending) {
          dispatch(addMessage({
            key: msgKey,
            value: res?.message
          }));
        }
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