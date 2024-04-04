import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './RightSide.module.css';
import ContentWrapper from '../ContentWrapper';

interface RightSideProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
};

export default function RightSide({
  children,
  title,
  subTitle
}: RightSideProps) {
  return (
    <aside className={styles.wrapper}>
      <ContentWrapper showEditor>
        <div className={styles.header}>
          <h3 className={styles.title}>
            <span>{title}</span>
            <button className={`btn btn-icon ${styles.closeButton}`}>
              <FontAwesomeIcon icon={faTimes} size='xl' />
            </button>
          </h3>
          {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </ContentWrapper>
    </aside>
  );
}