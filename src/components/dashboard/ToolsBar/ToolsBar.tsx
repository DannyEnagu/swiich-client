import { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faComment,
  faUsers,
  faUser,
  faRectangleList,
  faSliders
 } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import styles from './ToolsBar.module.css';

export default function ToolsBar() {
  const currPathname = usePathname();
  const changeActiveTool = () => {
    const toolLinks = document.querySelectorAll(`.${styles.toolLink}`) as NodeListOf<HTMLAnchorElement>;
    toolLinks.forEach((toolLink) => {
      // Remove active class from all tool links

      // Add active class to the tool link that matches the current pathname
      toolLink.classList.remove(styles.toolLinkIsActive);
      const extractPathname = toolLink.href.split('/').slice(3).join('/');
      const toolPathname = `/${extractPathname}`;

      if (toolPathname === currPathname) {
        toolLink.classList.add(styles.toolLinkIsActive);
      }
    });
  }

  useEffect(() => {
    changeActiveTool();
  }, [currPathname]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tools} role='list'>
        <li className={styles.tool}>
          <Link
            href="/dashboard/1"
            className={styles.toolLink}
          >
            <span className={styles.toolIcon}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className={styles.toolLabel}>
              Inbox
            </span>
          </Link>
        </li>
        <li className={styles.tool}>
          <Link
            href="/dashboard/1/group/1"
            className={styles.toolLink}
          >
            <span className={styles.toolIcon}>
            <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className={styles.toolLabel}>
              Groups
            </span>
          </Link>
        </li>
        <li className={styles.tool}>
          <Link
            href="/dashboard/1/dm/1"
            className={styles.toolLink}
          >
            <span className={styles.toolIcon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={styles.toolLabel}>
              DMs
            </span>
          </Link>
        </li>
        <li className={styles.tool}>
          <Link
            href="/dashboard/1/tasks/1"
            className={styles.toolLink}
          >
            <span className={styles.toolIcon}>
              <FontAwesomeIcon icon={faRectangleList} />
            </span>
            <span className={styles.toolLabel}>
              Tasks
            </span>
          </Link>
        </li>
        <li className={styles.tool}>
          <Link
            href="/dashboard/1/inbox/1"
            className={styles.toolLink}
          >
            <span className={styles.toolIcon}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <span className={styles.toolLabel}>
              Search
            </span>
          </Link>
        </li>
        <li className={styles.tool}>
          <Link
            href="/dashboard/1/settings"
            className={styles.toolLink}
          >
            <span className={styles.toolIcon}>
              <FontAwesomeIcon icon={faSliders} />
            </span>
            <span className={styles.toolLabel}>
              Settings
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}