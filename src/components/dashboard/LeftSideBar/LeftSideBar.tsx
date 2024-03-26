import ToolsBar from '../ToolsBar/ToolsBar';
import styles from './LeftSideBar.module.css';
import Nav from '../Nav/Nav';

export default function LeftSideBar() {
  return (
    <div className={styles.wrapper}>
      <ToolsBar />
      <Nav />
    </div>
  );
}