"use client";

import styles from "./Header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBorderAll,
    faEllipsisV,
    // faMagnifyingGlass,
    // faAngleDown,
    // faFilter
} from '@fortawesome/free-solid-svg-icons';
import PopUp from "@/components/ui/PopOver/PopUp";
import { useAppSelector } from "@/lib/hooks";
import { selectActiveProject } from "@/lib/features/uiSlice";
import UserGroupAvatars from "@/components/dashboard/Avatar/UserGroupAvatars";


export default function Header() {
    const activeBoard = useAppSelector(selectActiveProject);

    return (
        <header className={styles.wrapper}>
            <div className={`row align-center ${styles.title}`}>
               <PopUp>
                    <PopUp.Trigger>
                        <span role='button'
                            className={`row align-center`}
                        >
                            <FontAwesomeIcon icon={faBorderAll} />
                            <span>{activeBoard?.name || 'Board'}</span>
                        </span>
                    </PopUp.Trigger>
                    <PopUp.Content>
                        <div>Project Info</div>
                    </PopUp.Content>
                </PopUp>
            </div>
            <div className={`row align-center ${styles.actions}`}>
                <UserGroupAvatars
                    userNames={['test user', 'test person', 'test user', 'test person']}
                    avatarSize={21}
                />
                <PopUp position="bottom-start">
                    <PopUp.Trigger>
                        <FontAwesomeIcon icon={faEllipsisV} className={styles.actionsIcon} />
                    </PopUp.Trigger>
                    <PopUp.Content>
                        <button className="btn">Add Card</button>
                        <button className="btn">Add List</button>
                    </PopUp.Content>
                </PopUp>
            </div>
        </header>
    );
}