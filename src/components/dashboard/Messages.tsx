import ChatBubble from './ChatBubble/ChatBubble';
import styles from './dashboard.module.css';


export default function Messages() {
  return (
    <ul role="list" className={styles.messages}>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="John"
          time="2:30 PM"
          message="Hello, how are you?"
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="Dami"
          time="2:30 PM"
          message="Hi, I'm cool boss and you?"
          isSender={true}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="John"
          time="2:30 PM"
          message="Grateful, thanks for asking. I'm doing great. How's work?"
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="Dami"
          time="2:30 PM"
          message="Work is fine, just a little bit of stress here and there. But I'm good."
          isSender={true}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="John"
          time="2:30 PM"
          message="I understand, it's normal to feel that way. Just take it easy."
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="Dami"
          time="2:30 PM"
          message="Thanks, I will. I appreciate your concern."
          isSender={true}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="John"
          time="2:30 PM"
          message="You're welcome. I'm always here for you."
          isSender={false}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="Dami"
          time="2:30 PM"
          message="I know, thanks. I appreciate you."
          isSender={true}
        />
      </li>
      <li>
        <ChatBubble 
          profilePic="https://via.placeholder.com/50"
          senerName="John"
          time="2:30 PM"
          message="You're welcome... Anytime, any day."
          isSender={false}
        />
      </li>
    </ul>
  );
}