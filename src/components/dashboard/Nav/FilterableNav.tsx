'use client';
import Search from './Search';
import FilterableNavList from './FilterableNavList';
import CreateContact from '@/components/CreateContact/CreateContact';
import Spinner from "@/components/ui/Spinner";
import styles from './Nav.module.css';

interface FilterableNavProps {
  items: NavProps[];
  CreateButtonProps?: CreateContactProps | undefined;
  isLoading?: boolean;
}

/**
 * FilterableNav component - renders a filterable navigation list in the dashboard nav
 * 
 * @param items - The list of nav items (projects, private and group contacts, inbox) to render in the nav list.
 * @param CreateButtonProps - The props object containing the create button object to create a new nav item.
 * @param isLoading - A boolean value to indicate if the nav items are still loading.
 */
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
        {CreateButtonProps && CreateButtonProps.type === 'group' && <CreateContact {...CreateButtonProps} />}
        {/* {CreateButtonProps && CreateButtonProps.type === 'board' && <CreateProject {...CreateButtonProps} />} */}
      </div>
    </nav>
  );
}





