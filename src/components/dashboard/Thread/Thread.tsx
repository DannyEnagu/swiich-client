import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Thread.module.css';
import Posts from "../Posts";
import { closeRightCanvas } from '@/lib/features/uiSlice';
import { useAppDispatch } from "@/lib/hooks/storeHooks";

export default function Thread() {
  const dispatch = useAppDispatch();

  const hideContent = () => {
    dispatch(closeRightCanvas());
  }
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <span>Thread</span>
            <button
              className={`btn btn-icon ${styles.closeButton}`}
              onClick={() => hideContent}
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