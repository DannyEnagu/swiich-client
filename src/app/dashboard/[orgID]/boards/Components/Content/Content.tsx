import { TaskGrid } from "..";
import styles from "./Content.module.css";

export default function Content() {
  return (
    <div className={styles.wrapper}>
      {/* <h1>Content</h1> */}
      <TaskGrid />
    </div>
  );
}