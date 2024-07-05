'use client';
import { useEffect } from "react";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import { useGetGroupMessagesQuery } from "@/services/messages";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectActiveDepartment } from "@/lib/features/uiSlice";
import { selectMessagesByKey, setMessages } from "@/lib/features/messageSlice";
import Messages from "@/components/dashboard/Messages";

const PostsWrapper = withContentWrapper(Messages, true);

export default function GroupMessagesWrapper() {
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

  console.log(messages, isGroupMessagesError);
    return (<PostsWrapper
        messages={messages}
        isLoading={isGroupMessagesLoading}
        isLoadingMore={false}
    />);
}