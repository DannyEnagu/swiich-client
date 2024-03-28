import TextEditorWrapper from '../TextEditor/TextEditorWrapper';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <TextEditorWrapper />
    </footer>
  );
}