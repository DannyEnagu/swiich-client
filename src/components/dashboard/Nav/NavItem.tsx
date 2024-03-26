import styles from './Nav.module.css';

interface NavItemProps {
  isActive?: boolean;
  children: React.ReactNode;
};

export default function NavItem({
  isActive, children}: NavItemProps
  ) {
  return (
    <li className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}>
      {children}
    </li>
  );
}