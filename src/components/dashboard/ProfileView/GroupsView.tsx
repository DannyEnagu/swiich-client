import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import styles from './ProfileView.module.css';

export default function GroupsInCommon() {
    return (
        <div className={styles.userGroups}>
        <h3 className='row justify-between'>
          <span>Groups In Common</span>
          <FontAwesomeIcon icon={faUsersLine} />
        </h3>
        <ul className={styles.groupsList} role='list'>
          <li>Group 1</li>
          <li>Group 2</li>
          <li>Group 3</li>
          <li>Group 4</li>
          <li>Group 5</li>
        </ul>
      </div>
    )
}