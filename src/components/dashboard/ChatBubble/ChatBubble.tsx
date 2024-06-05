'use client'
import styles from './ChatBubble.module.css';
import Avatar from '@/components/ui/Avatar/Avatar';
import StringAvatar from '@/components/ui/Avatar/StringAvatar';
import { setRightCanvas } from '@/lib/features/uiSlice';
import { useAppDispatch } from "@/lib/hooks/storeHooks";

interface ChatBubbleProps {
  profilePic: string;
  userName: string;
  time: string;
  message: string;
  isSender: boolean;
  isSent?: boolean;
}

export default function ChatBubble({
  profilePic,
  userName,
  time,
  message,
  isSender
 }: ChatBubbleProps) {
  const dispatch = useAppDispatch();

  const openRightCanvas = (contentType: 'thread' | 'profile') => {
    dispatch(setRightCanvas({
      content: contentType,
      isOpen: true
    }))
  };
  return (
    <div
    className={`
      ${styles.bubble}
      ${isSender ? styles.bubbleSent : ''}
    `
    }>
      <button
        className='btn'
        onClick={() => openRightCanvas('profile')}
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