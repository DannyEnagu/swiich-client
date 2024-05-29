import styles from './ChatBubble.module.css';
import Avatar from '@/components/ui/Avatar/Avatar';
import StringAvatar from '@/components/ui/Avatar/StringAvatar';

interface ChatBubbleProps {
  profilePic: string;
  senerName: string;
  time: string;
  message: string;
  isSender: boolean;
  isSent?: boolean;
}

export default function ChatBubble({
  profilePic,
  senerName,
  time,
  message,
  isSender
 }: ChatBubbleProps) {
  return (
    <div
    className={`
      ${styles.bubble}
      ${isSender ? styles.bubbleSent : ''}
    `
    }>
      {profilePic 
        ? <Avatar
            imgSrc={profilePic}
            size={45}
            imgAlt={`user ${senerName} profile picture`}
          />
        : <StringAvatar 
            name={senerName}
            size={45}
          />}

      <div className={styles.bubbleContent}>
        <div className={`
          ${styles.bubbleSenderInfo}
          ${isSender ? styles.bubbleSenderInfoSent : ''}
        `
        }>
          <span className={styles.bubbleSenderName}>{senerName}</span>
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