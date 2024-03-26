import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

interface SenderItemProps {
  userName: string;
  senderStatus: string;
  messageStatus: string;
  profilePic: string;
  lastMessage: string;
  messagesCount: number;
  timeStamps: string;
};

export default function SenderItem({
  userName,
  senderStatus,
  messageStatus,
  timeStamps,
  profilePic,
  messagesCount,
  lastMessage
}: SenderItemProps) {
  return (
    <div className={styles.sender}>
      <div className={styles.senderImg}>
        <Image
          src={profilePic}
          width={46}
          height={46}
          alt={`${userName}`}
        />

        {senderStatus === 'Online' && (
          <span className={styles.senderStatus} />)
        }
      </div>
      <div className={styles.senderInfo}>
        <h3>
          <span className={styles.senderName}>{userName}</span>

          <div>
            {messageStatus === 'read' && (
              <FontAwesomeIcon icon={faCheck} className={styles.senderRead} />)
            }
            <span className={styles.senderTime}>{timeStamps}</span>
          </div>
        </h3>
        <p>
          <span className={styles.senderLastMsg}>{lastMessage}</span>
          <span className={styles.senderLastMsgCount}>
            {messagesCount}
          </span>
        </p>
      </div>
    </div>
  );
}