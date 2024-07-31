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

const Task = () => {
    return (
        <div className={styles.task}>
            <div className={styles.taskHeader}>
                <h5>Task 1</h5>
                <button className={`btn ${styles.quickActionBtn}`}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
            <div className={styles.taskBody}>
                <div className='row align-center justify-between'>
                    <div className={`${styles.taskStatus} ${styles.taskStatusDone}`}>
                        <span>Completed</span>
                    </div>
                    <div className={`${styles.priority} ${styles.priorityHigh}`}>
                        <FontAwesomeIcon icon={faCircle} size='2xs' />
                        <span>High Priority</span>
                    </div>
                </div>
                <div className={styles.assigntees}>
                </div>
            </div>
            <hr className={styles.taskDivider}/>
            <div className={styles.taskFooter}>
                <div className={styles.taskRange}>
                    <span>
                        Task Done: 50/100
                    </span>
                    <div className={styles.taskRangeBar}>
                        <div className={styles.taskRangeProgress} style={{width: '30%'}}/>
                    </div>
                </div>
                <div className={styles.taskDueDate}>
                <span>Due Date: 14th May</span>
                </div>
            </div>
        </div>
    );
};

const AddTask = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const addTask = () => {
        setShowAddTask(!showAddTask);
    }
    return (
        <div className={styles.addTask}>
            {showAddTask && <input type="text" placeholder="Add Task" />}
            <button className={`btn btn-primary ${styles.addTaskBtn}`}
                onClick={() => addTask()}
            >
                {showAddTask ? 'Add' : 'New'}
            </button>
        </div>
    );
}

export default function TasksGrid() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((task) => {
        return <Task key={task} />;
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