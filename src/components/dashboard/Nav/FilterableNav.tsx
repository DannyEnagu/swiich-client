'use client';
import styles from './Nav.module.css';
import Search from './Search';
import FilterableNavList from './FilterableNavList';
import CreateContact, { CreateContactProps } from '@/components/CreateContact/CreateContact';

interface FilterableNavProps {
  items: NavProps[];
  CreateButtonProps?: CreateContactProps | undefined;
}

export default function FilterableNav({
  items,
  CreateButtonProps,
}: FilterableNavProps) {
  const handleTextChange = (text: string) => {
    // Filter items based on text
  };
  return (
    <nav className={styles.nav}>
      <Search onTextChange={handleTextChange}/>
      <div className={styles.navContent}>
        <FilterableNavList filteredItems={items} />
        {CreateButtonProps && (
          <CreateContact {...CreateButtonProps} />
        )}
      </div>
    </nav>
  );
}





