import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { limitString } from '@/utils/helpers';
import styles from './Nav.module.css';
import DMAvatar from '../Avatar/DMAvatar';

export default function DMContact({
  contactName,
  senderStatus,
  messageStatus,
  timeStamps,
  profilePic,
  messagesCount,
  lastMessage,
  contactID,
  typing
}: DMContactProps) {
  return (
    <div className={styles.sender}>
      <div className={styles.senderImg}>
        <DMAvatar
          userName={contactName}
          profilePic={profilePic}
          size={43}
        />
        {senderStatus === 'Online' && (
          <span className={styles.senderStatus} />)
        }
      </div>
      <div className={styles.senderInfo}>
        <h3>
          <span className={styles.senderName}>{contactName}</span>
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