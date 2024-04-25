import { useState } from 'react';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  summary: React.ReactNode;
  children: React.ReactNode;
}

export default function Modal({
  children, summary 
}: ModalProps) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (<>
    <button
      onClick={() => setIsModalOpen(!isModalOpen)}
      className={`btn btn-icon ${styles.modalToggle}`}
    >
      {summary}
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