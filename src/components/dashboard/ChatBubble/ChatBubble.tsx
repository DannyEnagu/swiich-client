'use client'
import ProfileAvatar from '@/components/ProfileAvatar';
import styles from './ChatBubble.module.css';
import useSetActiveCanvas from '@/lib/hooks/useSetActiveCanvas';
import { usePathname } from 'next/navigation';

interface ChatBubbleProps {
  profilePic: string;
  userName: string;
  userID: string | number;
  time: string;
  message: string;
  isSender?: boolean;
  isSent?: boolean;
}

export default function ChatBubble({
  userID,
  profilePic,
  userName,
  time,
  message,
  isSender
 }: ChatBubbleProps) {

  const {switchOpenCanvas: openRightCanvas} = useSetActiveCanvas();
  const pathname = usePathname();
  return (
    <div
    className={`
      ${styles.bubble}
      ${isSender ? styles.bubbleSent : ''}
    `
    }>
      <button
        className='btn'
        onClick={() => openRightCanvas({
          id: userID,
          name: userName,
          url: pathname,
          type: 'profile',
          isRightSidebarOpen: true,
          rightSidebarContentType: 'profile'
        })}
      >
        <ProfileAvatar
          name={userName}
          size={45}
          src={profilePic}
          alt={`user ${userName} profile picture`}
        />
      </button>

      <div className={styles.bubbleContent}>
        <div className={`
          ${styles.bubbleSenderInfo}
          ${isSender ? styles.bubbleSenderInfoSent : ''}
        `
        }>
          <span className={styles.bubbleSenderName}>{userName}</span>
          <span className={styles.bubbleSenderTime}>{time}</span>
        </div>
        <div className={`
          ${styles.message}
          ${isSender ? styles.messageSent : ''}`
        }>
          {message}
        </div>
      </div>
    </div>
  );
}