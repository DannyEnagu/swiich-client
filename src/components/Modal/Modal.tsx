import {
  useState,
  useContext,
  createContext,
  useRef
} from 'react';
import { useClickOutside } from '@/utils/hooks';
import styles from './Modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: React.ReactNode;
}

type DefaultObjectType = {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const defaultObj: DefaultObjectType = {
  isModalOpen: false,
  setIsModalOpen: () => {}
};

export const ModalContext = createContext(defaultObj);

const ModalSummary = ({ children }: ModalProps) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
  return (
      <button
      onClick={() => setIsModalOpen(!isModalOpen)}
      className={`btn btn-icon ${styles.modalToggle}`}
    >
      {children}
    </button>
  );
};

const ModalContent = ({ children }: ModalProps) => {
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  useClickOutside(modalContentRef, () => {
    setIsModalOpen(false);
  });

  return (
    <div
      className={`${styles.modalContentWrapper} ${isModalOpen ? styles.modalContentShow : styles.modalContentHidden}`} 
    >
      <div
        className={styles.modalContent}
        ref={modalContentRef}
       >
        <button
          className={`btn btn-icon ${styles.modalClose}`}
          onClick={() => setIsModalOpen(!isModalOpen)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default function Modal({
  children,
}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{isModalOpen, setIsModalOpen}}>
      <div className={`
          ${styles.modal}
          ${isModalOpen ? styles.modalShow : styles.modalHidden}`
        }>
          {children}
      </div>
    </ModalContext.Provider>);
}

Modal.Summary = ModalSummary;
Modal.Content = ModalContent;