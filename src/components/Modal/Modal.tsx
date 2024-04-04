import { useState } from 'react';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: React.ReactNode;
  modalLauncherContent: React.ReactNode;
}

export default function Modal({
  children, modalLauncherContent 
}: ModalProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (<>
    <button
      onClick={() => setIsModalOpen(!isModalOpen)}
      className={`btn btn-icon ${styles.modalToggle}`}
    >
      {modalLauncherContent}
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