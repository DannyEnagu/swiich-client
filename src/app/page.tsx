import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/dashboard/1">Dashboard</Link>
          <br />
          <Link href="/signin">Sign In</Link>
          <br />
          <Link href="/signup">Sign up</Link>
        </li>
      </ul>
    </main>
  );
}
