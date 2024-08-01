'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisH,
    faCircle,
    faMagnifyingGlass,
    faFilter
 } from '@fortawesome/free-solid-svg-icons';
import styles from './TasksGrid.module.css';
import PopUp from '@/components/ui/PopOver/PopUp';
import { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';
import { useGetTasksQuery } from '@/services/task';
import { useAppSelector } from '@/lib/hooks';
import { selectUser } from '@/lib/features/authSlice';

export default function TasksGrid() {
    const userId = useAppSelector(selectUser)?.id
    const {data: userTasks, isFetching, isError} = useGetTasksQuery(userId); 
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const tasks = userTasks?.map((task) => {
        return <Task
                key={task.id}
                {...task}
            />;
    });
    return (
        <div className={styles.tasksGrid}>
            <div className={styles.tasksHeader}>
                <AddTask />
                <div className={styles.tasksFilter}>
                    <label htmlFor='search' className={`${styles.tasksSearch} ${isSearchFocused ? styles.isFocused : ''}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.actionsIcon} size='sm' />
                        <input
                            type="search"
                            placeholder="Search"
                            id='search'
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                    </label>
                    <PopUp>
                        <PopUp.Trigger>
                        <FontAwesomeIcon icon={faFilter} className={styles.actionsIcon} />
                        </PopUp.Trigger>
                        <PopUp.Content>
                            <div className={styles.filterOptions}>
                                <div className={styles.filterOption}>
                                    <input type="checkbox" name="filter" id="filter1" />
                                    <label htmlFor="filter1">Filter 1</label>
                                </div>
                                <div className={styles.filterOption}>
                                    <input type="checkbox" name="filter" id="filter2" />
                                    <label htmlFor="filter2">Filter 2</label>
                                </div>
                                <div className={styles.filterOption}>
                                    <input type="checkbox" name="filter" id="filter3" />
                                    <label htmlFor="filter3">Filter 3</label>
                                </div>
                            </div>
                        </PopUp.Content>
                    </PopUp>
                </div>
            </div>
            <div className={styles.tasks}>
                {tasks}
            </div>
        </div>
    );
}