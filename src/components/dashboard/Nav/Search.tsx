import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '@/components/ui/Input';
import styles from './Nav.module.css';

interface SearchProps {
    onTextChange: (e: string) => void;
};

export default function Search({ onTextChange }: SearchProps) {
    return (
      <div className={styles.navSearch}>
        <span className={styles.navSearchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <Input
          type="text"
          placeholder="Search"
          className={styles.navSearchInput}
          onChange={(e) => onTextChange(e.target.value)}
        />
    </div>);
  }