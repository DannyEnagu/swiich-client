import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.search}>

      </div>
      <div className={styles.actions}>
        <button className='btn'>
          <FontAwesomeIcon icon={faBell} className={styles.actionIcon} />
        </button>
        <button className='btn'>
          <FontAwesomeIcon icon={faCircleQuestion} className={styles.actionIcon} />
        </button>
      </div>
    </header>
  );
}