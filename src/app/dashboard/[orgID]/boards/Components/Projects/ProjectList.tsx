"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import Nav from "@/components/dashboard/Nav/Nav";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavList from "@/components/dashboard/Nav/NavList";
import NavLink from "@/components/dashboard/Nav/NavLink";
import styles from "./ProjectList.module.css";
import Modal from "@/components/Modal/Modal";
import { TaskDetails } from "..";

export default function ProjectList() {
  const currPathname = usePathname();
  const router = useRouter();
  
  const changeActiveProject = useCallback(() => {
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
  }, [currPathname]);

  useEffect(() => {
    changeActiveProject();
  }, [changeActiveProject]);

  return (
    <Nav showSearch>
      <NavList>
        <NavItem>
          <details className={`${styles.project}`}>
              <summary className="row justify-between align-center">
                <NavLink to="/dashboard/1/boards/1">Project 1</NavLink>
                <FontAwesomeIcon
                icon={faAngleDown}
                size="sm"
                className={styles.projectIcon} />
              </summary>
              <ul className={styles.taskList} role="list">
                  <li>
                    <Modal>
                      <Modal.Summary>
                      <span className={styles.taskSmmry}>Task 1</span>
                      </Modal.Summary>
                      <Modal.Content>
                        <TaskDetails />
                      </Modal.Content>
                    </Modal>
                  </li>
                  <li>
                    <Modal>
                      <Modal.Summary>
                      <span className={styles.taskSmmry}>Task 2</span>
                      </Modal.Summary>
                      <Modal.Content>
                        <TaskDetails />
                      </Modal.Content>
                    </Modal>
                  </li>
              </ul>
          </details>
        </NavItem>
        <NavItem>
          <details className={`${styles.project}`}>
              <summary className="row justify-between align-center">
                <NavLink to="/dashboard/1/boards/2">Project 2</NavLink>
                <FontAwesomeIcon
                icon={faAngleDown}
                size="sm"
                className={styles.projectIcon} />
              </summary>
              <ul className={styles.taskList} role="list">
                  <li>
                    <Modal>
                      <Modal.Summary>
                      <span className={styles.taskSmmry}>Task 1</span>
                      </Modal.Summary>
                      <Modal.Content>
                        <TaskDetails />
                      </Modal.Content>
                    </Modal>
                  </li>
                  <li>
                    <Modal>
                      <Modal.Summary>
                      <span className={styles.taskSmmry}>Task 2</span>
                      </Modal.Summary>
                      <Modal.Content>
                        <TaskDetails />
                      </Modal.Content>
                    </Modal>
                  </li>
              </ul>
          </details>
        </NavItem>
        <NavItem>
          <details className={`${styles.project}`}>
              <summary className="row justify-between align-center">
                <NavLink to="/dashboard/1/boards/3">Project 3</NavLink>
                <FontAwesomeIcon
                icon={faAngleDown}
                size="sm"
                className={styles.projectIcon} />
              </summary>
              <ul className={styles.taskList} role="list">
                  <li>
                    <Modal>
                      <Modal.Summary>
                      <span className={styles.taskSmmry}>Task 1</span>
                      </Modal.Summary>
                      <Modal.Content>
                        <TaskDetails />
                      </Modal.Content>
                    </Modal>
                  </li>
                  <li>
                    <Modal>
                      <Modal.Summary>
                      <span className={styles.taskSmmry}>Task 2</span>
                      </Modal.Summary>
                      <Modal.Content>
                        <TaskDetails />
                      </Modal.Content>
                    </Modal>
                  </li>
              </ul>
          </details>
        </NavItem>
        <NavItem>
          <Modal>
            <Modal.Summary>
              <div className={`row align-center ${styles.createBoard}`}>
                <FontAwesomeIcon icon={faPlus} />
                <span>Create Board</span>
              </div>
            </Modal.Summary>
            <Modal.Content>
              <h1>Create Board</h1>
            </Modal.Content>
          </Modal>
        </NavItem>
      </NavList>
    </Nav>
  );
}