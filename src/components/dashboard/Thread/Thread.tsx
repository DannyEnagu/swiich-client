import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Thread.module.css';
import Posts from "../Posts";
import { useAppDispatch } from "@/lib/hooks/storeHooks";
import useSetActiveCanvas from '@/lib/hooks/useSetActiveCanvas';

export default function Thread() {
  const { closeRightSidebar: hideContent } = useSetActiveCanvas();
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <span>Thread</span>
            <button
              className={`btn btn-icon ${styles.closeButton}`}
              onClick={() => hideContent('thread')}
              >
              <FontAwesomeIcon icon={faTimes} size='xl' />
            </button>
          </h3>
          <p className={styles.subTitle}>General</p>
        </div>
        <div className={styles.content}>
          <Posts />
        </div>
    </div>
  );
}