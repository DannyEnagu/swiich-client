import Image from 'next/image';
import styles from './ChatBubble.module.css';

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
      <Image
        src={profilePic}
        width={45}
        height={45}
        alt='Profile Picture'
        className='rounded-img'
      />
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