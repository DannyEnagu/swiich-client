import TextEditor from './TextEditor/TextEditor';
import styles from './dashboard.module.css';

interface ContentWrapperProps {
  children: React.ReactNode;
  showEditor?: boolean;
}

export default function ContentWrapper({ 
  children, showEditor }: ContentWrapperProps
) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentWrapperInner}>
        { children }
      </div>

      { showEditor && <div className={styles.contentWrapperFooter}>
        <TextEditor />
      </div>}
    </div>
  );
}