import TextEditor from './TextEditor/TextEditor';
import styles from './dashboard.module.css';

export default function withContentWrapper<P>(Children: React.ComponentType<P>, showEditor: boolean = false) {
  return function ContentWrapper(props: any) {
    return (
      <div className={styles.contentWrapper}>
        <div className={styles.contentWrapperInner}>
          <Children {...props} />
        </div>
        {showEditor && <div className={styles.contentWrapperFooter}>
          <TextEditor sendMessage={props.onSend} />
        </div>}
      </div>
    );
  }
}