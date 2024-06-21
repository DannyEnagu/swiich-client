'use client'
import styles from './ChatBubble.module.css';
import Avatar from '@/components/ui/Avatar/Avatar';
import StringAvatar from '@/components/ui/Avatar/StringAvatar';
import useSetActiveCanvas from '@/lib/hooks/useSetActiveCanvas';
import { usePathname } from 'next/navigation';

interface ChatBubbleProps {
  profilePic: string;
  userName: string;
  userID: string | number;
  time: string;
  message: string;
  isSender: boolean;
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
        {profilePic 
          ? <Avatar
              imgSrc={profilePic}
              size={45}
              imgAlt={`user ${userName} profile picture`}
            />
          : <StringAvatar 
              name={userName}
              size={45}
            />}
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