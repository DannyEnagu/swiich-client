import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisH,
    faCircle,
} from '@fortawesome/free-solid-svg-icons';
import styles from './TasksGrid.module.css';

const calculateTaskRange = (checklist: TaskCheckList[]) => {
    const completed = checklist.filter(item => (item.status === 'Completed')).length;
    if (checklist.length === 0) return 0
    return (completed * 100) / checklist.length;
};

export default function Task(task: Task) {
    // const taskAssignees = task.assignees.map(assignee => (assignee.email))
    // const completedTaskPercentage = calculateTaskRange(task.checklists);

    return (
        <div className={styles.task}>
            <div className={styles.taskHeader}>
                <h5>{task.title}</h5>
                <button className={`btn ${styles.quickActionBtn}`}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
            <div className={styles.taskBody}>
                <div className='row align-center justify-between'>
                    <div className={`${styles.taskStatus} ${styles.taskStatusDone}`}>
                        <span>{task.status}</span>
                    </div>
                    <div className={`${styles.priority} ${styles.priorityHigh}`}>
                        <FontAwesomeIcon icon={faCircle} size='2xs' />
                        <span>High Priority</span>
                    </div>
                </div>
                <div className={styles.assigntees}>
                    {/* {taskAssignees.join(', ')} */}
                </div>
            </div>
            <hr className={styles.taskDivider}/>
            <div className={styles.taskFooter}>
                <div className={styles.taskRange}>
                    <span>
                        {/* Task Done: {completedTaskPercentage}/100 */}
                    </span>
                    {/* <div className={styles.taskRangeBar}>
                        <div className={styles.taskRangeProgress} style={{width: completedTaskPercentage + '%'}}/>
                    </div> */}
                </div>
                <div className={styles.taskDueDate}>
                <span>Due Date: {task.deadline}</span>
                </div>
            </div>
        </div>
    );
}