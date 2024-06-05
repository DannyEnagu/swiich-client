'use client';
import styles from './Nav.module.css';
import Search from './Search';
import FilterableNavList from './FilterableNavList';
import CreateContact from '@/components/CreateContact/CreateContact';
interface FilterableNavProps {
  items: NavProps[];
  showCreateContact?: boolean;
  createContactText?: string;
  createContactTitle?: string;
  onHandleAdd?: (vales: any) => void;
}

export default function FilterableNav({
  items,
  showCreateContact = false,
  onHandleAdd,
  createContactText,
  createContactTitle,
}: FilterableNavProps) {
  const handleTextChange = (text: string) => {
    // Filter items based on text
  };
  return (
    <nav className={styles.nav}>
      <Search onTextChange={handleTextChange}/>
      <div className={styles.navContent}>
        <FilterableNavList filteredItems={items} />
        {showCreateContact && (
          <CreateContact
            title={createContactTitle || ''}
            displayText={createContactText || ''}
            onAdd={onHandleAdd || (() => {})}
          />
        )}
      </div>
    </nav>
  );
}





