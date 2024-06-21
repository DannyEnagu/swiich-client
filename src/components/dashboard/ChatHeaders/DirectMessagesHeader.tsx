'use client';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons';
import DMAvatar from '../Avatar/DMAvatar';
import { selectActiveDM } from '@/lib/features/uiSlice';
import useSetActiveCanvas from '@/lib/hooks/useSetActiveCanvas';
import { useAppSelector } from '@/lib/hooks';
import { usePathname } from 'next/navigation';

/**
 * Direct Messages Header - Header for direct messages
 * All private messages have a header that displays the user name and user image icon.
*/
export default function DMHeader() {
    const activeChat = useAppSelector(selectActiveDM);
    const pathname = usePathname();
    const { switchOpenCanvas: openRightSide} = useSetActiveCanvas();
    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
                <DMAvatar
                    profilePic='https://via.placeholder.com/50'
                    userName={activeChat?.name || 'User'}
                    size={32}
                />
            <div className={styles.headerInfo}>
                <h3 className={styles.headerName}>
                    {activeChat?.name}
                </h3>
                <p className={styles.headerText}>
                    <button
                        className={styles.headerTextBtn}
                        onClick={() => openRightSide({
                            id: activeChat?.id,
                            isRightSidebarOpen: true,
                            rightSidebarContentType: 'profile',
                            name: activeChat?.name,
                            type: 'profile',
                            url: pathname
                        })}
                    >
                        Click here for contact info
                    </button>
                </p>
            </div>
            </div>
            <div className={styles.headerRight}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.headerIconsSearch} />
                <FontAwesomeIcon icon={faEllipsisVertical} className={styles.headerIconsElipsis} />
            </div>
        </div>
      </header>
    );
}