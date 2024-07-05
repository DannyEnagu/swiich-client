import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrophone,
  faPaperclip,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons';
import Input from "@/components/ui/Input";
import styles from "./TextEditor.module.css";

export default function TextEditor() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.share}>
        <button className="btn">
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
      </div>
      <form className={styles.editor}>
        <button className="btn">
          <FontAwesomeIcon icon={faFaceLaugh} />
        </button>
        <Input
          type="text"
          placeholder="Type a message..."
          className={styles.editorInput}
        />
        <button className="btn" type='submit'>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
      <div className={styles.voice}>
        <button className="btn">
          <FontAwesomeIcon icon={faMicrophone} />
        </button>
      </div>
    </div>
  );
}