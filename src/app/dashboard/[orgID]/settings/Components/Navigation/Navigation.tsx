import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faUser,
  faBell,
  faVideo,
  faMicrophone,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import NavItem from "@/components/dashboard/Nav/NavItem";
import NavList from "@/components/dashboard/Nav/NavList";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <div className={styles.header}>
        <h2>Settings</h2>
      </div>
      <NavList>
        <NavItem>
          <button className={`btn
            ${styles.settingsButton}
            ${styles.settingsButtonActive}
          `}>
            <FontAwesomeIcon icon={faPen} className={styles.settingsIcon} />
            <span className={styles.settingsLable}>General</span>
          </button>
        </NavItem>
        <NavItem>
          <button className={`btn
            ${styles.settingsButton}
          `}>
              <FontAwesomeIcon icon={faUser} className={styles.settingsIcon} />
              <span className={styles.settingsLable}>Account</span>
          </button>
        </NavItem>
        <NavItem>
          <button className={`btn
            ${styles.settingsButton}
          `}>
            <FontAwesomeIcon icon={faBell} className={styles.settingsIcon} />
            <span className={styles.settingsLable}>Notification</span>
          </button>
        </NavItem>
        <NavItem>
          <button className={`btn
              ${styles.settingsButton}
            `}>
            <FontAwesomeIcon icon={faMicrophone} className={styles.settingsIcon} />
            <span className={styles.settingsLable}>Audio</span>
          </button>
        </NavItem>
        <NavItem>
          <button className={`btn
              ${styles.settingsButton}
            `}>
            <FontAwesomeIcon icon={faVideo} className={styles.settingsIcon} />
            <span className={styles.settingsLable}>Video</span>
          </button>
        </NavItem>
        <NavItem>
          <button className={`btn
              ${styles.settingsButton}
            `}>
            <FontAwesomeIcon icon={faCog} className={styles.settingsIcon} />
            <span className={styles.settingsLable}>Privacy</span>
          </button>
        </NavItem>
      </NavList>
    </nav>
  );
}