import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faFile } from '@fortawesome/free-regular-svg-icons';
import { faVideo, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '@/components/ui/Dropdown/Dropdown';
import Avatar from '@/components/ui/Avatar/Avatar';
import styles from './ProfileView.module.css';

export default function Attachments() {
    return (
        <div className={styles.attachments}>
        <h3 className='row justify-between'>
          <span>Attachments</span>
          <span>{`(400 Files)`}</span>
        </h3>
        <div className={styles.attachment}>
          <Dropdown
            summary={
              <span className={`row align-center ${styles.toggle}`}>
                <FontAwesomeIcon icon={faImage} className='db-txt-accent' />
                <span className={styles.files}>
                  <span className={styles.fileType}>Photo</span>
                  <span className={styles.fileInfo}>
                    <span>54 Files. 350MB</span>
                  </span>
                </span>
              </span>
            }
          >
            <ul
              className={`${styles.filesList} ${styles.photoFiles}`}
              role='list'
            >
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <button className={`btn ${styles.viewMore}`}>
                  +51 More
                </button>
              </li>
            </ul>
          </Dropdown>
          <Dropdown
            summary={
              <span className={`row align-center ${styles.toggle}`}>
                <FontAwesomeIcon icon={faVideo} className='db-txt-accent' />
                <span className={styles.files}>
                  <span className={styles.fileType}>Video</span>
                  <span className={styles.fileInfo}>
                    <span>10 Files. 50MB</span>
                  </span>
                </span>
              </span>
            }
          >
            <ul
              className={`${styles.filesList} ${styles.photoFiles}`}
              role='list'
            >
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <button className={`btn ${styles.viewMore}`}>
                  +51 More
                </button>
              </li>
            </ul>
          </Dropdown>
          <Dropdown
            summary={
              <span className={`row align-center ${styles.toggle}`}>
                <FontAwesomeIcon icon={faFile} className='db-txt-accent' />
                <span className={styles.files}>
                  <span className={styles.fileType}>Document</span>
                  <span className={styles.fileInfo}>
                    <span>120 Files. 550MB</span>
                  </span>
                </span>
              </span>
            }
          >
            <ul
              className={`${styles.filesList} ${styles.photoFiles}`}
              role='list'
            >
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <button className={`btn ${styles.viewMore}`}>
                  +51 More
                </button>
              </li>
            </ul>
          </Dropdown>
          <Dropdown
            summary={
              <span className={`row align-center ${styles.toggle}`}>
                <FontAwesomeIcon icon={faMicrophone} className='db-txt-accent' />
                <span className={styles.files}>
                  <span className={styles.fileType}>Voice</span>
                  <span className={styles.fileInfo}>
                    <span>125 Files. 250MB</span>
                  </span>
                </span>
              </span>
            }
          >
            <ul
              className={`${styles.filesList} ${styles.photoFiles}`}
              role='list'
            >
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <Avatar imgSrc='' size={100} imgAlt='User Files' />
              </li>
              <li>
                <button className={`btn ${styles.viewMore}`}>
                  +51 More
                </button>
              </li>
            </ul>
          </Dropdown>
        </div>
      </div>
    );
}