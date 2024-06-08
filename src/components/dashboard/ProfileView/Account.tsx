'use client'
import Link from 'next/link';
import styles from './ProfileView.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faUserShield,
    faBell,
    faPowerOff
} from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { getOrgID } from '@/utils/helpers';

export default function AccountSettings() {
    const currPathname = usePathname();
    const orgID = getOrgID(currPathname);
    return (
        <div className={styles.acctSettings}>
            <h3>Account Settings</h3>
            <Link href={`/dashboard/${orgID}/settings`} className={styles.acctSetting}>
                <span className='row align-center'>
                   <FontAwesomeIcon icon={faUserShield} size='xs' />
                    Security and Privacy
                </span>
                <FontAwesomeIcon icon={faAngleRight} size='xs' />
            </Link>
            <Link href={`/dashboard/${orgID}/settings`} className={styles.acctSetting}>
                <span className='row align-center'>
                   <FontAwesomeIcon icon={faBell} size='xs' />
                    Notifications
                </span>
                <FontAwesomeIcon icon={faAngleRight} size='xs' />
            </Link>
            <button className={styles.acctSetting}>
                <span>
                    sign Out
                </span>
                <FontAwesomeIcon icon={faPowerOff} size='xs' />
            </button>
        </div>
    );
}