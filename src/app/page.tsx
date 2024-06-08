import Link from "next/link";
import styles from "./page.module.css";
import UserOrganizations from "@/components/UserOrganizations/UserOrganization";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <UserOrganizations />
      <ul>
        <li>
          <Link href="/sign-in">Sign In</Link>
          <br />
          <Link href="/sign-up">Sign up</Link>
          <br />
        </li>
      </ul>
    </main>
  );
}
