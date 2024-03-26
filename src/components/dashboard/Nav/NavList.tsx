import styles from './Nav.module.css';

export default function NavList({
  children
}: Readonly<{
  children: React.ReactNode;
}>
) {
  return (
    <ul
      className={styles.navList}
      role='list'
    >
      {children}
    </ul>
  );
}