import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './Nav.module.css';
import NavItem from './NavItem';
import NavList from './NavList';
import Contact from './Contact';

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
            <Contact
              messageStatus='unread'
              userName="John Doe"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
            href="/dashboard/1/group/1"
            className={styles.navLink}
          >
            <Contact
              messageStatus='read'
              userName="Tina Doe"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={99}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/dm/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Linus Torvalds"
              senderStatus="offline"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={10}
              lastMessage=""
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
        <NavItem>
          <Link
          href="/dashboard/1/tasks/1"
          className={styles.navLink}
          >
            <Contact
              messageStatus='unread'
              userName="Jeff Dannyplus"
              senderStatus="Online"
              timeStamps="10 m"
              profilePic="https://via.placeholder.com/50"
              messagesCount={3}
              typing={true}
              lastMessage="Hello Jonh Doe, how are you doing?"
            />
          </Link>
        </NavItem>
      </NavList>
      </div>
    </nav>
  );
}
