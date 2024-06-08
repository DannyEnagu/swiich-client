import styles from './Nav.module.css';

export default function NavBar({ children }:
    { children: React.ReactNode }
) {
    return (
        <nav className={styles.nav}>
            {children}
        </nav>
    );
}