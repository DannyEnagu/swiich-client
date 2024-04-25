import styles from './TasksGrid.module.css';

export default function TasksGrid() {
    return (
        <div className={styles.tasksGrid}>
            <div className={styles.header}>
                <h2>Tasks</h2>
            </div>
            <div className={styles.tasks}>
                <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <h3>Task 1</h3>
                    <button className={styles.taskButton}>Edit</button>
                </div>
                <div className={styles.taskBody}>
                    <p>Task 1 Description</p>
                </div>
                </div>
                <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <h3>Task 2</h3>
                    <button className={styles.taskButton}>Edit</button>
                </div>
                <div className={styles.taskBody}>
                    <p>Task 2 Description</p>
                </div>
                </div>
                <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <h3>Task 3</h3>
                    <button className={styles.taskButton}>Edit</button>
                </div>
                <div className={styles.taskBody}>
                    <p>Task 3 Description</p>
                </div>
                </div>
            </div>
        </div>
    );
}