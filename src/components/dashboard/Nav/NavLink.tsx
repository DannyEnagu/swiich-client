import Link from 'next/link';
import styles from './Nav.module.css';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

export default function NavList({
  children,
  to
}: NavItemProps
) {
  return (<Link
    href={to}
    className={styles.navLink}
    >
      {children}
  </Link>);
}