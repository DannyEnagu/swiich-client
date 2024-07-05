'use client';
import { useSession } from 'next-auth/react';
import Spinner from '../ui/Spinner';
import ChatBubble from './ChatBubble/ChatBubble';
import styles from './dashboard.module.css';

interface MessagesProps {
  messages: Message[];
  isLoading: boolean;
  isLoadingMore?: boolean;
};

export default function Messages({
  messages, isLoading, isLoadingMore
}: MessagesProps) {
  const session = useSession();
  const authUserID = session.data?.user?.id;

  if (isLoading) {
    return (
      <div className={styles.messages}>
        <Spinner />
      </div>
    );
  }

  return (
    <ul role="list" className={styles.messages}>
      {isLoadingMore && (<Spinner />)}
      {messages.length === 0 && (
        <li className={styles.emptyMessages}>
          <p>No messages yet</p>
        </li>
      )}
      {messages.map((message) => (
        <li key={message.id}>
          <ChatBubble
            userID={authUserID}
            profilePic='https://via.placeholder.com/50'
            userName={message.sender.name}
            time={message.createdAt}
            message={message.content}
            isSender={message.senderId === authUserID && message.messageType === 'private'}
          />
        </li>
      ))}
    </ul>
  );
}