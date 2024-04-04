import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersLine, faLock } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';
import Avatar from '@/components/Avatar/Avatar';

interface ContactProps {
  groupTitle: string;
  groupMsgCount: number;
  groupImg?: string;
  isPublicGroup: boolean;
};

export default function GroupContact({
  groupTitle,
  groupMsgCount,
  groupImg,
  isPublicGroup,
}: ContactProps) {
  return (
    <div className={styles.groupContact}>
      <div className={styles.visuals}>
        { /* Display group image if available */}
        { /* Display group icon if no image is available */}
        {groupImg
          ? <Avatar
              imgSrc={groupImg}
              size={20}
              imgAlt={`group ${groupTitle} image`}
            />
          : <FontAwesomeIcon icon={faUsersLine} size='sm' />}
        
        {isPublicGroup && (
          <div className={styles.groupIsPublic}>
            <FontAwesomeIcon icon={faLock} />
          </div>)
        }
      </div>
        <span className={styles.groupTitle}>{groupTitle}</span>
        <span className={styles.groupMsgCount}>{groupMsgCount}</span>
    </div>
  );
}