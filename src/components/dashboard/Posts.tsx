import styles from './dashboard.module.css';
import ChatBubble from './ChatBubble/ChatBubble';

export default function Posts() {
  return (
    <ul role="list" className={styles.posts}>
      <li>
        <ChatBubble 
          profilePic=""
          userName="Jonny Depp"
          time="2:30 PM"
          message="Hello, Team?"
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          userName="Tina"
          time="2:30 PM"
          message="Hello, guys. How are you doing?"
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic=""
          userName="Cyntia Morgan" 
          time="2:30 PM"
          message="we are doing great, thanks for asking. How about you?"
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          userName="Philip"
          time="2:30 PM"
          message="The team is doing great, we are making progress."
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          userName="Timothy"
          time="2:30 PM"
          message="So happy to hear that, keep up the good work."
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic=""
          userName="Jeff Bezos"
          time="2:30 PM"
          message="We will, thanks for the encouragement."
          isSender={false}
        />
      </li>
    </ul>
  );
}