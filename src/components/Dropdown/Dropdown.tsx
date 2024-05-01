import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import styles from './Dropdown.module.css';

interface DropdownProps {
  children: React.ReactNode;
  summary: React.ReactNode |  string;
};

export default function Dropdown({ children, summary }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={`btn row justify-between ${styles.dropdownToggle}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {summary}
        <FontAwesomeIcon
          icon={showDropdown ? faChevronUp : faChevronDown}
          className={`${showDropdown ? 'db-txt-accent' : ''}`}
        />
      </button>
      <div className={`
        ${styles.dropdownContent}
        ${showDropdown ? styles.showDropdownContent : ''}
      `}>
        {children}
      </div>
  </div>
  );
}