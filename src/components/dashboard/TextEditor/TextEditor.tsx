'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import {
  faMicrophone,
  faPaperclip,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons';
import Input from "@/components/ui/Input";
import styles from "./TextEditor.module.css";
import PopUp from '@/components/ui/PopOver/PopUp';
import { useState } from 'react';

interface TextEditorProps {
  sendMessage: (message: string) => void;
}

const  emojiStyles: EmojiStyles = {
  '--epr-emoji-size': '1.5rem',
  '--epr-preview-height': '40px'
}

export default function TextEditor({ sendMessage }: TextEditorProps) {
  const [message, setMessage] = useState('');
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage('');
  };
  const emojiClick = (emoji: EmojiClickData) => {
    setMessage(prev => prev + emoji.emoji);
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update message state
    setMessage(e.target.value);
    // Auto resize textarea height as content grows
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';

  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.share}>
        <button className="btn">
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
      </div>
      <form onSubmit={handleSend} className={styles.editor}>
        <span className="btn">
          <PopUp position='top-start'>
            <PopUp.Trigger>
              <FontAwesomeIcon icon={faFaceLaugh} />
            </PopUp.Trigger>
            <PopUp.Content>
              <EmojiPicker
                onEmojiClick={emojiClick}
                height={400}
                width={280}
                style={emojiStyles}
              />
            </PopUp.Content>
          </PopUp>
        </span>
        <textarea
          rows={1}
          name='message'
          value={message}
          onChange={handleChange}
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