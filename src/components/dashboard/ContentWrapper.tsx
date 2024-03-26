import Footer from "@/components/dashboard/Footer/Footer";
import styles from './dashboard.module.css';

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ 
  children }: ContentWrapperProps
  ) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentWrapperInner}>
        { children }
      </div>

      <Footer />
    </div>
  );
}