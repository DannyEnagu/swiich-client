import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

interface NavProps {
  children: React.ReactNode;
}

export default function Nav({ children }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={styles.navSearch}>
          <span className={styles.navSearchIcon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className={styles.navSearchInput}
          />
        </div>
      </div>
      <div className={styles.navContent}>
        {children}
      </div>
    </nav>
  );
}
