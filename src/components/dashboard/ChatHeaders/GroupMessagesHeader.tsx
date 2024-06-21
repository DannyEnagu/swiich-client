'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import GroupAvatar from '../Avatar/GroupAvatar';
import { selectActiveDepartment } from '@/lib/features/uiSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import PopUp from '@/components/ui/PopOver/PopUp';
import CustomAutocomplete, { optionTypes } from '@/components/CustomAutocomplete/CustomAutocomplete';
import UserGroupAvatars from '../Avatar/UserGroupAvatars';
import styles from './Header.module.css';
import { selectDeptByID, updateDeptMembers } from '@/lib/features/departmentSlice';
import { useGetDeptUsersQuery, useAddUserToDeptMutation } from '@/services/department';
import { selectOrgMembers } from '@/lib/features/organizationSlice';
import Spinner from '@/components/ui/Spinner';
import { useCallback, useEffect, useMemo, useState } from 'react';


/**
 * Group Messages Header - Header for group messages
 * All groups have a header that displays the group name and group icon.
 */
export default function GMHeader() {
    const dispatch = useAppDispatch();
    const [selectedMembersToAdd, setSelectedMembersToAdd] = useState<optionTypes[]>([]);
    const orgMembers = useAppSelector(selectOrgMembers);
    const activeChat = useAppSelector(selectActiveDepartment);
    const [addUserToDept, { isLoading }] = useAddUserToDeptMutation();
    const deptByID  = useAppSelector((state) => selectDeptByID(state, activeChat?.id))
    // If the department is not in the store,
    // return an empty object
    const department = useMemo(() => {
        return deptByID || {
            id: '',
            name: '',
            members: [],
            organisationID: '',
            createdAt: '',
            updatedAt: ''
        }
    }, [deptByID]);
    const membersNames = department?.members.map((member) => member.name);
    const orgMembersEmail = orgMembers.map((member) => ({value: member.email, label: member.name}));
    // only fetch department members if
    // the department members are not already in the store
    const {
        data: deptMembers, 
        isFetching: isDeptMembersFetching,
        isError: isDeptMembersError
    } = useGetDeptUsersQuery(activeChat?.id, {
        skip: department && department?.members.length > 0
    });
    
    useEffect(() => {
        if (!isDeptMembersFetching && deptMembers && department && !isDeptMembersError) {
            // Set the department members in the store
            const dept = {
                ...department,
                members: deptMembers.departmentUsers
            }
            dispatch(updateDeptMembers(dept));
        }
    }, [
        isDeptMembersFetching,
        department,
        deptMembers,
        isDeptMembersError,
        dispatch
    ])

    const handleAddUser = async () => {
        try {
            const selectedUsers = department.members.map(m => selectedMembersToAdd.map(s => {
                if (m.email === s.value) {
                    console.log(m)
                    return m
                }
            }));
            const userIds = selectedUsers.map(u => u[0]?.id);
            const reqBody = {
                adminOrDeptHeadId: '1',
                userIds: userIds,
                departmentId: activeChat?.id
            };
            await addUserToDept(reqBody).unwrap()
                .then((res) => {
                    if (res?.isSuccess) {
                        const { message } = res;
                        console.log(message);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    };

    const addSelectedMember = useCallback((options: optionTypes[]) => {
        console.log(options)
        setSelectedMembersToAdd([...options])
    }, []);
    // console.log('selectedMembersToAdd', selectedMembersToAdd);

    return (<header className={styles.header}>
        <div className={styles.headerContent}>
            <div className={styles.headerLeft}>
                <div className={styles.headerInfo}>
                    <PopUp>
                        <PopUp.Summary>
                            <span role='button'
                                className={`btn ${styles.headerName} row align-center`}
                            >
                                <GroupAvatar
                                    src='https://via.placeholder.com/50'
                                    size={32}
                                    alt={`${activeChat.name} Group Icon`}
                                />
                                <span>
                                    {activeChat.name}
                                </span>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </PopUp.Summary>
                        <PopUp.Content>
                            <div>Group Info</div>
                        </PopUp.Content>
                    </PopUp>
                </div>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.groupUsers}>
                    {membersNames.length > 0 && (
                        <>
                            <UserGroupAvatars
                                userNames={membersNames || []}
                                avatarSize={24}
                            />
                            <div className={styles.divider} />
                        </>
                        )}
                    <div className={styles.groupUsersAdd}>
                        <PopUp position='bottom-start'>
                            <PopUp.Summary>
                                <FontAwesomeIcon icon={faUserPlus} size='sm' />
                            </PopUp.Summary>
                            <PopUp.Content>
                                <div className={styles.addUsers}>
                                    <CustomAutocomplete
                                        label='select users to add to group'
                                        options={orgMembersEmail}
                                        onChange={addSelectedMember}
                                        showPopper
                                        type='select'
                                    />
                                    <button
                                        disabled={isLoading}
                                        className='btn btn-primary'
                                        onClick={() => handleAddUser()}
                                    >
                                        {selectedMembersToAdd.length}
                                        {isLoading ? <Spinner /> : 'Add'}
                                    </button>
                                </div>
                            </PopUp.Content>
                        </PopUp>
                    </div>
                </div>
            </div>
        </div>
    </header>);
}