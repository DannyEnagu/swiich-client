'use client'
import styles from './ChatBubble.module.css';
import Avatar from '@/components/ui/Avatar/Avatar';
import StringAvatar from '@/components/ui/Avatar/StringAvatar';
import useActiveCanvas from '@/lib/hooks/useActiveCanvas';

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

  const {openRightSide: openRightCanvas} = useActiveCanvas();
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
          contentID: userID,
          content: 'profile',
          isOpen: true
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