import styles from './Nav.module.css';

interface NavItemProps {
  children: React.ReactNode;
};

export default function NavItem({
  children
}: NavItemProps
) {
  return (
    <li className={styles.navItem}>
      {children}
    </li>
  );
}