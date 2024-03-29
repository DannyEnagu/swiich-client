import { useState } from 'react';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

interface ModalProps {
  children: React.ReactNode;
  toggleText?: string;
  icon: IconProp;
  iconSize?: SizeProp;
}

export default function Modal({ children, toggleText, icon, iconSize }: ModalProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (<>
    <button
      onClick={() => setIsModalOpen(!isModalOpen)}
      className={`btn btn-icon ${styles.modalToggle}`}
    >
      {icon && <FontAwesomeIcon icon={icon} size={iconSize} />}
      <span>
        {toggleText || 'Open Modal'}
      </span>
    </button>
    <div className={`
        ${styles.modal}
        ${isModalOpen ? styles.modalShow : styles.modalHidden}`
      }>
      <div className={styles.modalContent}>
        <button
          className={`btn btn-icon ${styles.modalClose}`}
          onClick={() => setIsModalOpen(!isModalOpen)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {children}
      </div>
    </div>
  </>);
}