import ProfileAvatar from '@/components/ProfileAvatar';
import styles from './Avatar.module.css';

interface UserGroupAvatarsProps {
    userNames: string[];
    numberOfUsersToDisplay?: number;
    avatarSize: number;
}

export default function UserGroupAvatars({
    userNames,
    avatarSize,
    numberOfUsersToDisplay=2
}: UserGroupAvatarsProps) {
    const groupUsers = userNames.slice(0, numberOfUsersToDisplay);
    return (
        <div className={styles.userGroup}>
            <div className={styles.userGroupAvatars}>
                {groupUsers.map((name, index) => (
                    <ProfileAvatar
                        key={index}
                        size={avatarSize}
                        name={name}
                        alt={`${name} Avatar`}
                    />
                ))}
            </div>
            {/* If the number of users is greater than 2, display the count of users */}
            {userNames.length > numberOfUsersToDisplay && (
                <div className={styles.userGroupCount}>
                    <span>{`+${userNames.length - numberOfUsersToDisplay}`}</span>
                </div>
            )}
        </div>
    );
}