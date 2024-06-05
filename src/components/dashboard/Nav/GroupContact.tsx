import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';
import Avatar from '@/components/ui/Avatar/Avatar';


export default function GroupContact({
  groupID,
  groupTitle,
  groupMsgCount,
  groupImg,
  isPublicGroup,
}: GroupContactProps) {
  return (
    <div className={styles.groupContact}>
      <span className={styles.visuals}>
        { /* Display group image if available */}
        { /* Display group icon if no image is available */}
        {groupImg
          ? <Avatar
              imgSrc={groupImg}
              size={20}
              imgAlt={`group ${groupTitle} image`}
            />
          : <FontAwesomeIcon className={styles.visualsIcon} icon={faHashtag} />}
        
        {isPublicGroup && (
          <div className={styles.groupIsPublic}>
            <FontAwesomeIcon icon={faLock} />
          </div>)}
      </span>
      <span className={styles.groupTitle}>{groupTitle}</span>
      {// Display the number of unread messages
        groupMsgCount > 0 && (
          <span className={styles.groupMsgCount}>{groupMsgCount}</span>
        )
      }
    </div>
  );
}