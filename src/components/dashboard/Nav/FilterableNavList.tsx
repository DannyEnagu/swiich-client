import FilterableNavItem from "./FilterableNavItem";
import styles from './Nav.module.css';

// interface FilterableNavListProps {
//   filteredItems: NavProps[];
// }

/**
 * FilterableNavList component - renders a list of nav items in the dashboard nav.
 * Can be a list of board, or contact (that is, group or private contact) depending on the type of items passed in the props object.
 * @param {NavProps[]} props - The props object containing the list of items to render in the nav list.
 */ 
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