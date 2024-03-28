import styles from './Header.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faEllipsisVertical
 } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <Image
            src='https://via.placeholder.com/50'
            width={32}
            height={32}
            alt='Profile Picture'
            className='rounded-img'
          />
          <div className={styles.headerInfo}>
            <h3 className={styles.headerName}>John Doe</h3>
            <p className={styles.headerText}>
              <button className={styles.headerTextBtn}>
                Click here for contact info
              </button>
            </p>
          </div>
        </div>
        <div className={styles.headerRight}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.headerIconsSearch} />
          <FontAwesomeIcon icon={faEllipsisVertical} className={styles.headerIconsElipsis} />
        </div>
      </div>
    </header>
  );
}