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
  title: string;
}

type DefaultObjectType = {
  isModalOpen: boolean,
  title?: string,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const defaultObj: DefaultObjectType = {
  isModalOpen: false,
  title: '',
  setIsModalOpen: () => {}
};

export const ModalContext = createContext(defaultObj);

// ModalSummary is responsible for Opening the Modal
const ModalSummary = ({ children }:
  Pick<ModalProps, 'children'>) => {
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

/**
 * ModalContent is responsible for the content of the Modal
 * It will be hidden by default and will be shown when the ModalSummary is clicked
 */
const ModalContent = ({ children }:
  Pick<ModalProps, 'children'>) => {
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const { isModalOpen, setIsModalOpen, title } = useContext(ModalContext);

  useClickOutside(modalContentRef, () => {
    setIsModalOpen(false);
  });

  return (
    <div
      className={`${styles.modalContentBackdrop} ${isModalOpen ? styles.modalContentShow : styles.modalContentHidden}`} 
    >
      <div
        className={styles.modalContent}
        ref={modalContentRef}
       >
        <header className={styles.modalHeader}>
          <h2>
            {title}
          </h2>
          <button
            className={`btn btn-icon ${styles.modalClose}`}
            onClick={() => setIsModalOpen(!isModalOpen)}>
            <FontAwesomeIcon icon={faTimes} size='xl' />
          </button>
        </header>
        {children}
      </div>
    </div>
  );
};

/**
 * Modal is the parent component that will wraps ModalSummary and ModalContent
 * @children The content of the Modal
 * @title The title that will be displayed in at the top of the Modal
 */
export default function Modal({
  children,
  title
}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={
        {
          isModalOpen,
          setIsModalOpen,
          title
        }
      }
    >

      {children}
    </ModalContext.Provider>);
}

Modal.Summary = ModalSummary;
Modal.Content = ModalContent;