'use client'
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
import Modal from '@/components/ui/Modal/Modal';
import Avatar from '@/components/ui/Avatar/Avatar';
import { getOrgID } from '@/utils/helpers';
import UpdateTeamInfo from '../UpdateTeamInfo';
import { useAppSelector } from '@/lib/hooks';
import {
  selectActiveDM,
  selectActiveDepartment,
  selectActiveProject,
 } from '@/lib/features/uiSlice';


export default function ToolsBar() {
  const currPathname = usePathname();
  const orgID = getOrgID(currPathname);
  const groupID = useAppSelector(selectActiveDepartment)?.id;
  const dmID = useAppSelector(selectActiveDM)?.id;
  const projectID = useAppSelector(selectActiveProject)?.id;
  
  useEffect(() => {
    const changeActiveTool = () => {
      const toolLinks = document.querySelectorAll(`.${styles.toolLink}`) as NodeListOf<HTMLAnchorElement>;
      toolLinks.forEach((toolLink) => {
        // Remove active class from all tool links
        toolLink.classList.remove(styles.toolLinkIsActive);
        // Get the active tool from the data attribute
        const activeTool = toolLink.dataset.active as string;
        const dashboardPath = `/dashboard/${orgID}`;
        // Add active class to the current tool link
        if(currPathname.includes(activeTool) || (activeTool == 'inbox' && currPathname === dashboardPath)) {
          toolLink.classList.add(styles.toolLinkIsActive);
        }
      });
    }
    changeActiveTool();
  }, [currPathname, orgID]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tools} role='list'>
        <li className={styles.tool}>
          <span className={styles.toolIcon}>
            <Modal title="Update organization details">
              <Modal.Summary>
                <Avatar
                  size={35}
                  imgSrc=""
                  imgAlt=""
                />
              </Modal.Summary>
              <Modal.Content>
                <UpdateTeamInfo />
              </Modal.Content>
            </Modal>
          </span>
        </li>
        <li className={styles.tool}>
          <Link
            href={`/dashboard/${orgID}`}
            className={styles.toolLink}
            data-active='inbox'
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
            href={`/dashboard/${orgID}/group/${groupID || 0}`}
            className={styles.toolLink}
            data-active='group'
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
            href={`/dashboard/${orgID}/dm/${dmID || 0}`}
            className={styles.toolLink}
            data-active='dm'
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
            href={`/dashboard/${orgID}/boards/${projectID || 0}`}
            className={styles.toolLink}
            data-active='boards'
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
              <Modal title="Deep Search">
                <Modal.Summary>
                  <Link
                    href='#'
                    className={styles.toolLink}
                    data-active='search'
                  >
                    <span className={styles.toolIcon}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size='lg'/>
                    </span>
                    <span className={styles.toolLabel}>
                      Search
                    </span>
                  </Link>
                </Modal.Summary> 
                <Modal.Content>
                  <input type="text" placeholder="Search..." />
                </Modal.Content>
              </Modal>
        </li>
        <li className={styles.tool}>
          <Link
            href={`/dashboard/${orgID}/settings`}
            className={styles.toolLink}
            data-active='settings'
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