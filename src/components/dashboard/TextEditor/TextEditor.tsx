import styles from "./TextEditor.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faPaperclip,
  faPaperPlane
 } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons';

export default function TextEditor() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.share}>
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <div className={styles.editor}>
        <FontAwesomeIcon icon={faFaceLaugh} />
        <input
          type="text"
          placeholder="Type a message..."
          className={styles.editorInput}
        />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <div className={styles.voice}>
        <FontAwesomeIcon icon={faMicrophone} />
      </div>
    </div>
  );
}