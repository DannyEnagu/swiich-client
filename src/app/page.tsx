import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/dashboard/1">Dashboard</Link>
        </li>
      </ul>
    </main>
  );
}
