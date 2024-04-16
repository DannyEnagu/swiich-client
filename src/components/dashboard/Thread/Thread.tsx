import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Thread.module.css';
import Posts from "../Posts";
import ContentWrapper from '../ContentWrapper';

export default function Thread() {
  return (
    <aside className={styles.wrapper}>
      <ContentWrapper showEditor>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <span>Thread</span>
            <button className={`btn btn-icon ${styles.closeButton}`}>
              <FontAwesomeIcon icon={faTimes} size='xl' />
            </button>
          </h3>
          <p className={styles.subTitle}>General</p>
        </div>
        <div className={styles.content}>
          <Posts />
        </div>
      </ContentWrapper>
    </aside>
  );
}