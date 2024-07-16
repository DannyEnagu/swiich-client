'use client';
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Messages from "@/components/dashboard/Messages";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import { selectActiveDM } from "@/lib/features/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetPrivateMessagesQuery, usePostPrivateMessageMutation } from "@/services/messages";
import { addMessage, selectMessagesByKey, setMessages } from "@/lib/features/messageSlice";
import useSocket from "@/lib/hooks/useSocket";


const MessagesWrapper = withContentWrapper(Messages, true);

export default function PrivateMessagesWrapper() {
  const socket = useSocket();
  const [postPrivateMessage, { isLoading: isSending }] = usePostPrivateMessageMutation();
  const dispatch = useAppDispatch();
  const activeDm = useAppSelector(selectActiveDM);
  const session = useSession();
  const authUserID = session.data?.user?.id;
  const msgKey = `dm-${authUserID}-${activeDm?.id}`;

  const messages = useAppSelector((state) => selectMessagesByKey(state, msgKey));

  // Fetch messages if there are no messages in the store
  const {
    data: dmMessages,
    isLoading: isDmMessagesLoading,
    isError: isDmMessageError
  } = useGetPrivateMessagesQuery({
    receiverId: activeDm?.id,
    senderId: authUserID,
  }, {skip: messages.length > 0});

  useEffect(() => {
    if (dmMessages && !isDmMessagesLoading && !isDmMessageError) {
      dispatch(setMessages({
        key: msgKey,
        value: dmMessages.messages
      }));
    }
  }, [
    dispatch,
    dmMessages,
    isDmMessagesLoading,
    isDmMessageError,
    msgKey
  ]);

  const handleSend = async (message: string) => {
    try {
      socket.emit("private-message", {
        senderId: authUserID as string,
        recipientId: activeDm?.id,
        content: message
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MessagesWrapper
      messages={messages}
      isLoading={isDmMessagesLoading}
      isLoadingMore={false}
      onSend={handleSend}
    />
  );
}