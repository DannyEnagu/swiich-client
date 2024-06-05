import BoardItem from './BoardItem';
import Contact from './Contact';
import styles from './Nav.module.css';

// interface FilterableNavItemProps {
//   item: NavProps;
// }
  
export default function FilterableNavItem({ item }: any) {
  return (
    <li className={styles.navItem}>
      {item.hasOwnProperty('boardID') && (<BoardItem {...item} />)}
      {item.hasOwnProperty('type') && (<Contact contact={item} />)}
    </li>);
}