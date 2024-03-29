import styles from './Header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faEllipsisVertical,
  faAngleDown,
  faUsersLine,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Avatar from '@/components/Avatar/Avatar';
import StringAvatar from '@/components/Avatar/StringAvatar';

interface DirectMessageHeaderProps {
  userName: string;
  profilePic: string;
};

function DirectMessageHeader({userName, profilePic}: DirectMessageHeaderProps) {
  return (<>
    <div className={styles.headerLeft}>
      { /* Display user image if available */}
      { /* Display user icon if no image is available */}
      {profilePic
        ?  <Avatar
            imgSrc={profilePic}
            size={32}
            imgAlt={`user ${userName} profile picture`}
          />
        : <StringAvatar
            name={userName}
            size={32}
          />}
      <div className={styles.headerInfo}>
        <h3 className={styles.headerName}>
            {userName}
        </h3>
        <p className={styles.headerText}>
          <button className={styles.headerTextBtn}>
            Click here for contact info
          </button>
        </p>
      </div>
    </div>
    <div className={styles.headerRight}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.headerIconsSearch} />
      <FontAwesomeIcon icon={faEllipsisVertical} className={styles.headerIconsElipsis} />
    </div>
  </>)
}

interface GroupMessageHeaderProps {
  groupTitle: string;
  groupImg: string;
};

function GroupMessageHeader({groupTitle, groupImg}: GroupMessageHeaderProps) {
  return (<>
    <div className={styles.headerLeft}>
      <div className={styles.headerInfo}>
        <button className={`btn ${styles.headerName} row`}>
          { /* Display group image if available */}
          { /* Display group icon if no image is available */}
          {groupImg
            ? (<Avatar
              imgSrc={groupImg}
              size={20}
              imgAlt={`${groupTitle} Group Image`}
            />)
            : (<FontAwesomeIcon icon={faUsersLine} />)}
          <span>
            {groupTitle}
          </span>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </div>
    <div className={styles.headerRight}>
    </div>
  </>)
};

interface HeaderProps {
  isDm: boolean;
};

export default function Header({ isDm }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {isDm
        ? <DirectMessageHeader
            userName='John Doe'
            profilePic=''
          />
        : <GroupMessageHeader
            groupTitle='General'
            groupImg='https://via.placeholder.com/50'
          />}
      </div>
    </header>
  );
}