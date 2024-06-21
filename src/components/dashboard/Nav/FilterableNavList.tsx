import FilterableNavItem from "./FilterableNavItem";
import styles from './Nav.module.css';

// interface FilterableNavListProps {
//   filteredItems: NavProps[];
// }

export default function FilterableNavList({ filteredItems }: any) {
    return (
      <ul
        className={styles.navList}
        role='list'
      >
        {filteredItems.map((item: any) => (
          <FilterableNavItem
            key={item.boardID ||
              item.contactID ||
              item.groupID
            }
            item={item}
          />
        ))}
      </ul>);
}