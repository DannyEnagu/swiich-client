import Footer from "@/components/dashboard/Footer/Footer";
import styles from './dashboard.module.css';

interface ContentWrapperProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

export default function ContentWrapper({ 
  children, showFooter }: ContentWrapperProps
  ) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentWrapperInner}>
        { children }
      </div>

      { showFooter && <Footer />}
    </div>
  );
}