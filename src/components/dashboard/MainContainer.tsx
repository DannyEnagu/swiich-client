import RightSideContainer from './RightSide/RightSideContainer';
import styles from './dashboard.module.css';

interface MainProps {
  children: React.ReactNode;
  showRightSideBar?: boolean;
}

export default function Main({
  children, showRightSideBar }: MainProps
  ) {
  return (
    <div className={styles.MainContainer}>
      { children }

      {/* Display the right sidebar if the prop is true */}
      { showRightSideBar && <RightSideContainer />}
    </div>
  );
}