import BoardItem from './BoardItem';
import Contact from './Contact';
import styles from './Nav.module.css';

interface FilterableNavItemProps {
  item: NavProps;
}

/**
 * FilterableNavItem component - renders a nav item in the dashboard nav
 * Can be a board or contact item depending on the type of item passed in the props object.
 * @param {FilterableNavItemProps} props - The props object containing the item object to render in the nav item. 
 * 
 */
export default function FilterableNavItem({ item }: FilterableNavItemProps) {
  return (
    <li className={styles.navItem}>
      {item.type === 'board'
        ? (<BoardItem {...item} />)
        : (<Contact contact={item} />)
      }
    </li>);
}