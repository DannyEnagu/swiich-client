import Link from 'next/link';
import styles from './Nav.module.css';

interface NavItemProps {
  to: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export default function NavList({
  children,
  isActive = false,
  to
}: NavItemProps
) {
  return (<Link
    href={to}
    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
    >
      {children}
  </Link>);
}