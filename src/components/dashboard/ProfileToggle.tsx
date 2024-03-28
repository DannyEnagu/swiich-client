import Image from "next/image";
import styles from "./dashboard.module.css";

export default function ProfileToggle() {
  return (
    <button className={styles.toggleProfile}>
      <Image
        src="https://via.placeholder.com/50"
        width={45}
        height={45}
        alt="Profile Picture"
        className="rounded-img"
      />
    </button>
  );
}