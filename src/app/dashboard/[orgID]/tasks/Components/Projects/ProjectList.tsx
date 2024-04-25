import Nav from "@/components/dashboard/Nav/Nav";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavList from "@/components/dashboard/Nav/NavList";
import styles from "./ProjectList.module.css";
import Modal from "@/components/Modal/Modal";
import { TaskDetails } from "..";

export default function ProjectList() {
  return (
    <Nav showSearch>
      <NavList>
        <NavItem>
            <details>
                <summary>Project 1</summary>
                <ul className={styles.taskList} role="list">
                    <li>
                      <Modal summary={
                        <span className={styles.taskSmmry}>Task 1</span>
                      }>
                        <TaskDetails />
                      </Modal>
                    </li>
                    <li>
                      <Modal summary={
                        <span className={styles.taskSmmry}>Task 2</span>
                      }>
                        <TaskDetails />
                      </Modal>
                    </li>
                </ul>
            </details>
        </NavItem>
        <NavItem>
            <details>
                <summary>Project 2</summary>
                <ul className={styles.taskList} role="list">
                    <li>
                      <Modal summary={
                        <span className={styles.taskSmmry}>Task 1</span>
                      }>
                        <TaskDetails />
                      </Modal>
                    </li>
                    <li>
                      <Modal summary={
                        <span className={styles.taskSmmry}>Task 2</span>
                      }>
                        <TaskDetails />
                      </Modal>
                    </li>
                </ul>
            </details>
        </NavItem>
        <NavItem>
            <details>
                <summary>Project 3</summary>
                <ul className={styles.taskList} role="list">
                    <li>
                      <Modal summary={
                        <span className={styles.taskSmmry}>Task 1</span>
                      }>
                        <TaskDetails />
                      </Modal>
                    </li>
                    <li>
                      <Modal summary={
                        <span className={styles.taskSmmry}>Task 2</span>
                      }>
                        <TaskDetails />
                      </Modal>
                    </li>
                </ul>
            </details>
        </NavItem>
      </NavList>
    </Nav>
  );
}