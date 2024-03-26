import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './Nav.module.css';
import NavItem from './NavItem';
import NavList from './NavList';
import SenderItem from './SenderItem';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={styles.navSearch}>
          <span className={styles.navSearchIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className={styles.navSearchInput}
          />
        </div>
      </div>
      <div className={styles.navContent}>
      <NavList>
        <NavItem isActive={true}>
          <Link
            href="/"
            className={styles.navLink}
          >
            <SenderItem
              messageStatus='unread'
              userName="John Doe"
              senderStatus="Online"
              timeStamps="10:00"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              lastMessage="Hello"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href="/dashboard/1/group/1"
            className={styles.navLink}
          >
            Group
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/dm/1"
          className={styles.navLink}
          >
            Direct Msg
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            Tasks
          </Link>
        </NavItem>
      </NavList>
      </div>
    </nav>
  );
}
