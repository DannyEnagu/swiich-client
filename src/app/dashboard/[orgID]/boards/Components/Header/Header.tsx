"use client";

import styles from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBorderAll,
    faEllipsisV,
    faMagnifyingGlass,
    faAngleDown,
    faFilter
} from '@fortawesome/free-solid-svg-icons';
import PopUp from "@/components/ui/PopOver/PopUp";


export default function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={`row align-center ${styles.title}`}>
               <FontAwesomeIcon icon={faBorderAll} />
               <span>Board View</span>
            </div>
            <div className={`row align-center ${styles.actions}`}>
                <PopUp position="bottom-start">
                    <PopUp.Summary>
                      <FontAwesomeIcon icon={faFilter} className={styles.actionsIcon} />
                    </PopUp.Summary>
                    <PopUp.Content>
                        <button className="btn">Add Card</button>
                        <button className="btn">Add List</button>
                    </PopUp.Content>
                </PopUp>
                <PopUp position="bottom-start">
                    <PopUp.Summary>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.actionsIcon} />
                    </PopUp.Summary>
                    <PopUp.Content>
                        <button className="btn">Add Card</button>
                        <button className="btn">Add List</button>
                    </PopUp.Content>
                </PopUp>
                <PopUp position="bottom-start">
                    <PopUp.Summary>
                        <FontAwesomeIcon icon={faEllipsisV} className={styles.actionsIcon} />
                    </PopUp.Summary>
                    <PopUp.Content>
                        <button className="btn">Add Card</button>
                        <button className="btn">Add List</button>
                    </PopUp.Content>
                </PopUp>
                <PopUp position="bottom-start">
                    <PopUp.Summary>
                        <span className={`btn btn-icon ${styles.createTaskBtn}`}>
                            <span>New</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </PopUp.Summary>
                    <PopUp.Content>
                        <button className="btn">Add Card</button>
                        <button className="btn">Add List</button>
                    </PopUp.Content>
                </PopUp>
            </div>
        </header>
    );
}