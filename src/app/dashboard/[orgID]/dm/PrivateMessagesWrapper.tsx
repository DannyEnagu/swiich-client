'use client';
import Messages from "@/components/dashboard/Messages";
import withContentWrapper from "@/components/dashboard/WithContentWrapper";


const MessagesWrapper = withContentWrapper(Messages, true);

export default function PrivateMessagesWrapper() {
  return (
    <MessagesWrapper
        messages={[]}
    />
  );
}