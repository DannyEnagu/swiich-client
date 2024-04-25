import styles from './ProfileView.module.css';
import ContentWrapper from '../ContentWrapper';
import Avatar from '@/components/Avatar/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faImage,
  faFile
} from '@fortawesome/free-regular-svg-icons';
import {
  faCircleInfo,
  faUsersLine,
  faVideo,
  faMicrophone
} from '@fortawesome/free-solid-svg-icons';
import Dropdown from '@/components/Dropdown/Dropdown';

export default function ProfileView() {

  return (
    <aside className={styles.wrapper}>
      <ContentWrapper>
        <div className={styles.header}>
          <Avatar imgSrc='' size={200} imgAlt='User name' />
          <button className={`btn ${styles.closeButton}`}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <h3 className='row justify-between'>
              <span>User Information</span>
              <FontAwesomeIcon icon={faCircleInfo} />
            </h3>
            <p>
              <span className={styles.label}>Full Name:</span>
              <span className={styles.value}>John Doe</span>
            </p>
            <p>
              <span className={styles.label}>Phone:</span>
              <span className={styles.value}>User name</span>
            </p>
            <p>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>
                adeadebobola0@gmail.com
              </span>
            </p>
          </div>
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
        </div>
      </ContentWrapper>
    </aside>
  );
}