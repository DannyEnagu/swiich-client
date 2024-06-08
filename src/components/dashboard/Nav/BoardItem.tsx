'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import NavLink from "./NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { TaskDetails } from "@/app/dashboard/[orgID]/boards/Components";
import Modal from "@/components/ui/Modal/Modal";
import useActiveCanvas from "@/lib/hooks/useActiveCanvas";
import styles from './Nav.module.css';
import { getOrgID } from '@/utils/helpers';


export default function BoardItem({
  boardID,
  boardName,
  boardImg,
  boardTasks
}: BoardProps) {
  const changeActiveCanvas = useActiveCanvas();
  const currPathname = usePathname();
  const linkRef = `/dashboard/${getOrgID(currPathname)}/boards/${boardID}`;
  
  useEffect(() => {
    const changeActiveProject = () => {
      const projectLinks = document.querySelectorAll(`.${styles.project}`) as NodeListOf<HTMLDetailsElement>;
      projectLinks.forEach((projectLink) => {
        // Remove active class from all project links
  
        // Add active class to the project link that matches the current pathname
        projectLink.classList.remove(styles.projectIsActive);
        const anchor = projectLink.querySelector('a') as HTMLAnchorElement;
        const extractPathname = anchor.href.split('/').slice(3).join('/');
        const projectPathname = `/${extractPathname}`;
  
        if (projectPathname === currPathname) {
          projectLink.classList.add(styles.projectIsActive);
        }
      });
    };

    changeActiveProject();
  }, [currPathname]);

  const tasks = boardTasks.map((task) => (
    <li key={task.id}>
        <Modal title=''>
        <Modal.Summary>
        <span className={styles.taskSummary}>
            {task.name}
        </span>
        </Modal.Summary>
        <Modal.Content>
            <TaskDetails task={task} />
        </Modal.Content>
        </Modal>
    </li>)) 
  return (
    <details className={`${styles.project}`}>
      <summary className="row justify-between align-center">
        <NavLink
          href={linkRef}
          onClick={() => changeActiveCanvas({
            id: boardID,
            name: boardName,
            url: linkRef,
          })}
          className={styles.projectLink}
        >
          {boardName}
        </NavLink>
        <FontAwesomeIcon
        icon={faAngleDown}
        size="sm"
        className={styles.projectIcon} />
      </summary>
      <ul className={styles.taskList} role="list">
        {tasks}
      </ul>
    </details>);
}