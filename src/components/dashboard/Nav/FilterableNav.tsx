'use client';
import Search from './Search';
import FilterableNavList from './FilterableNavList';
import CreateContact, { CreateContactProps } from '@/components/CreateContact/CreateContact';
import Spinner from "@/components/ui/Spinner";
import styles from './Nav.module.css';

interface FilterableNavProps {
  items: NavProps[];
  CreateButtonProps?: CreateContactProps | undefined;
  isLoading?: boolean;
}

export default function FilterableNav({
  items,
  CreateButtonProps,
  isLoading
}: FilterableNavProps) {
  const handleTextChange = (text: string) => {
    // Filter items based on text
  };
  return (
    <nav className={styles.nav}>
      <Search onTextChange={handleTextChange}/>
      <div className={styles.navContent}>
        {/* Display the filtered items */}
        {isLoading
          ? <span className={styles.navLoading}><Spinner /></span>
          :<FilterableNavList filteredItems={items} />
        }
        {items.length === 0 && !isLoading && (
          <span className={styles.navEmpty}>
            No content available
          </span>
        )}
        {/* Display the create button */}
        {CreateButtonProps && (
          <CreateContact {...CreateButtonProps} />
        )}
      </div>
    </nav>
  );
}





