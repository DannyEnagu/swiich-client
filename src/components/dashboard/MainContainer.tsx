import RightSideBar from './RightSideBar/RightSideBar';
import styles from './dashboard.module.css';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({
  children }: MainProps
  ) {
  return (
    <div className={styles.MainContainer}>
      { children }
      <RightSideBar />
    </div>
  );
}