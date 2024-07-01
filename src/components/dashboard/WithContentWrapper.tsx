import TextEditor from './TextEditor/TextEditor';
import styles from './dashboard.module.css';

interface ContentWrapperProps {
  children: React.FC;
  showEditor?: boolean;
}

export default function withContentWrapper(
  Children: ContentWrapperProps['children'],
  showEditor: ContentWrapperProps['showEditor'] = false) {
  return function ContentWrapper(props: any) {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.contentWrapperInner}>
          <Children {...props} />
        </div>
        {showEditor && <div className={styles.contentWrapperFooter}>
          <TextEditor />
        </div>}
      </div>
    );
  }
}