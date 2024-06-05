import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import Modal from "@/components/ui/Modal/Modal";
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
        {/* Display create Button and modal */}
        {/* {showCreateModal && (
          <li className={styles.navItem}>
            <Modal title=''>
              <Modal.Summary>
                <div className={`row align-center ${styles.createBoard}`}>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Create Board</span>
                </div>
              </Modal.Summary>
              <Modal.Content>
                <h1>Create Board</h1>
              </Modal.Content>
            </Modal>
          </li>
        )} */}
      </ul>);
}