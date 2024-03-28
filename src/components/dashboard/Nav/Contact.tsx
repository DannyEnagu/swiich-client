import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { limitString } from '@/utils/helpers';
import styles from './Nav.module.css';

interface ContactProps {
  userName: string;
  senderStatus: string;
  messageStatus: string;
  profilePic: string;
  lastMessage: string;
  messagesCount: number;
  timeStamps: string;
  typing?: boolean;
};

export default function Contact({
  userName,
  senderStatus,
  messageStatus,
  timeStamps,
  profilePic,
  messagesCount,
  lastMessage,
  typing
}: ContactProps ) {
  return (
    <div className={styles.sender}>
      <div className={styles.senderImg}>
        <Image
          className='rounded-img'
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
          {!typing && (<div>
              {messageStatus === 'read' && (
                <FontAwesomeIcon icon={faCheckDouble} className={styles.senderRead} />)
              }
              <span className={styles.senderTime}>{timeStamps}</span>
            </div>)}
        </h3>
        <p>
          {!typing 
          ? <>
              <span className={styles.senderLastMsg}>
                {limitString(lastMessage, 25)}
              </span>
              {/* Display the number of unread messages */}
              {(messagesCount > 0) && (
                <span className={styles.senderLastMsgCount}>
                  {messagesCount}
                </span>
              )}
            </>
          : (<span className={styles.senderTyping}>Typing...</span>)}
        </p>
      </div>
    </div>
  );
}