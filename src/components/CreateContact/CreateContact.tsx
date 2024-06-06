import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from "../ui/Modal/Modal";
import styles from './CreateContact.module.css';

export interface CreateContactProps {
  title: string;
  displayText: string;
  onAdd: (vales: string) => void;
}

export default function CreateContact ({ title, onAdd, displayText }: CreateContactProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd('');
  };
    return (<div className={styles.createWrapper}>
        <Modal title={title}>
          <Modal.Summary>
            <span className="py-sm row">
              <FontAwesomeIcon className={styles.createIcon} icon={faPlus} size="xl" />
              <span className={`mx-sm ${styles.createLabel}`}>
                {displayText}
              </span>
            </span>
          </Modal.Summary>
          <Modal.Content>
            <form className={styles.createForm} onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="row">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="row">
                <button type="submit">Add</button>
              </div>
            </form>
          </Modal.Content>
        </Modal>
      </div>);
}