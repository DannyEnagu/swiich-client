import { useState } from 'react';
import { useCreateTaskMutation } from '@/services/task';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import customToast from '@/utils/toast';
import { selectActiveProject } from '@/lib/features/uiSlice';
import Spinner from '@/components/ui/Spinner';
import styles from './TasksGrid.module.css';
import { addTask } from '@/lib/features/taskSlice';

export default function AddTask () {
    const [showAddTask, setShowAddTask] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const projectID = useAppSelector(selectActiveProject).id; 
    const dispatch = useAppDispatch();
    const [ createTask, { isLoading, isError } ] = useCreateTaskMutation();

    const toggleShowAdd = async () => {
        setShowAddTask(!showAddTask);
    }
    const createNewTask = async () => {
        const reqBody = {
            title: taskTitle,
            description: 'Describe what this task is about',
            projectId: projectID
        }
        const res = await createTask(reqBody).unwrap()

        if (res.isSuccess) {
            customToast({
                type: 'success',
                message: res.message
            })
            console.log(res)
            dispatch(addTask({
                ...res.task
            }))
            return
        }
        customToast({
            type: 'error',
            message: res.message
        })
    };
    return (
        <div className={styles.addTask}>
            {showAddTask
            ? <>
                    <input type="text" placeholder="Add Task" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
                    <button className={`btn btn-primary ${styles.addTaskBtn}`}
                        onClick={createNewTask}
                        disabled={taskTitle.length < 5}
                    >
                        {!isLoading ? 'Add': <Spinner />}
                    </button>
                </>
            : <button
                    className={`btn btn-primary ${styles.addTaskBtn}`}
                    onClick={toggleShowAdd}
                >
                    New
                </button>
            }
        </div>
    );
}