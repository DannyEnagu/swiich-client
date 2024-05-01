import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisH,
    faCircle
 } from '@fortawesome/free-solid-svg-icons';
import styles from './TasksGrid.module.css';

const Card = () => {
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
                    <input
                        type="range"
                        name="taskDone"
                        id="taskDone"
                        min={0}
                        max={100}
                        value={50}
                    />
                </div>
                <div className={styles.taskDueDate}>
                <span>Due Date: 14th May</span>
                </div>
            </div>
        </div>
    );
};

export default function TasksGrid() {
    return (
        <div className={styles.tasksGrid}>
            <div className={styles.tasks}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}