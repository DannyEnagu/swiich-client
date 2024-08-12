import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Details.module.css';
import { faTableList, faTasks } from '@fortawesome/free-solid-svg-icons';
import ChatBubble from '@/components/dashboard/ChatBubble/ChatBubble';
import ProfileAvatar from '@/components/ProfileAvatar';

export default function Details(task: Task) {
    return (
        <div>
            <header className={styles.taskHeader}>
                <h2 className={styles.taskTitle}>
                    <FontAwesomeIcon icon={faTasks} />
                    {task.title}
                </h2>
            </header>
            <div className={styles.taskBody}>
                <section className={styles.taskDetails}>
                    <div className={styles.taskDetailsItem}>
                        <h4>Status</h4>
                        <span>
                            <FontAwesomeIcon icon={faTableList} />
                            {task.status}
                        </span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>Due Date</h4>
                        <span>{task.deadline}</span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>Priority</h4>
                        <span>{task.priority}</span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>Members</h4>
                        <span>{task?.assignees?.map(assignee => assignee.email).join(', ')}</span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>Description</h4>
                        <textarea
                            value={task.description}
                            rows={5}
                        />
                    </div>
                </section>
                <section className={styles.taskAttachment}>
                    <h3>
                        <FontAwesomeIcon icon={faTableList} />
                        <span>Attachments</span>
                        <span>(2)</span>
                    </h3>
                    <div className={styles.taskAttachmentItem}>
                        <FontAwesomeIcon icon={faTableList} />
                        <div className={styles.taskAttachmentDetails}>
                            <h4>Attachment 1</h4>
                            <span>
                                <span>10.9 MB</span>
                                <span>Download</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.taskAttachmentItem}>
                        <FontAwesomeIcon icon={faTableList} />
                        <div className={styles.taskAttachmentDetails}>
                            <h4>Attachment 1</h4>
                            <span>
                                <span>10.9 MB</span>
                                <span>Download</span>
                            </span>
                        </div>
                    </div>
                    <div className={styles.taskAttachmentItem}>
                        <FontAwesomeIcon icon={faTableList} />
                        <div className={styles.taskAttachmentDetails}>
                            <h4>Attachment 1</h4>
                            <span>
                                <span>10.9 MB</span>
                                <span>Download</span>
                            </span>
                        </div>
                    </div>
                </section>
                <section className={styles.taskTabs}>
                    <div className={styles.taskTabsHeader}>
                        <button className={styles.active}>Checklist <span>(2)</span></button>
                        <button>Comments
                            <span>(3)</span>
                        </button>
                        <button>Activities
                            <span>(2)</span>
                        </button>
                    </div>
                    <div className={styles.taskTabsBody}>
                        <div className={styles.taskTab}>
                            <div className={styles.taskTabHeader}>
                                <h3>
                                    {task.title} Checklist
                                </h3>
                                <span>
                                    Right
                                </span>
                            </div>
                            <div className={styles.taskTabBody}>
                                <div className={styles.taskChecklist}>
                                    <div className={styles.taskChecklistItem}>
                                        <label>
                                            <input type='checkbox' name='taskChecklist1' />
                                            <span>Task 1</span>
                                        </label>
                                    </div>
                                    <div className={styles.taskChecklistItem}>
                                        <label>
                                            <input type='checkbox' />  
                                            <span>Task 2</span>
                                        </label>
                                    </div>
                                    <div className={styles.taskChecklistItem}>
                                        <label>
                                          <input type='checkbox' />
                                            <span>Task 3</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.taskTab}>
                            <div className={styles.taskTabHeader}>
                                <h3>Comments</h3>
                                <span>Right</span>
                            </div>
                            <div className={styles.taskTabBody}>
                                <div className={styles.taskComments}>
                                    <ChatBubble
                                        profilePic='https://via.placeholder.com/50'
                                        userName='John Doe'
                                        userID={'1'}
                                        time='2 hours ago'
                                        message='Task is looking good'
                                    />
                                    <ChatBubble
                                        profilePic='https://via.placeholder.com/50'
                                        userName='John Doe'
                                        userID={'1'}
                                        time='2 hours ago'
                                        message='Task is looking good'
                                    />
                                    <ChatBubble
                                        profilePic='https://via.placeholder.com/50'
                                        userName='John Doe'
                                        userID={'1'}
                                        time='2 hours ago'
                                        message='Task is looking good'
                                    />

                                    <div className={styles.commentInput}>
                                        <form>
                                            <input type='text' placeholder='Write a comment...' />
                                            <button className='btn'>
                                                <FontAwesomeIcon icon={faTableList} />
                                            </button>
                                            <button className='btn'>
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.taskTab}>
                            <div className={styles.taskTabHeader}>
                                <h3>Activities</h3>
                                <span>
                                    <FontAwesomeIcon icon={faTableList} />
                                    <span>Mark as read</span>
                                </span>
                            </div>
                            <div className={styles.taskTabBody}>
                                <div className={styles.taskActivities}>
                                    <div className={styles.taskActivity}>
                                        <ProfileAvatar
                                            src='https://via.placeholder.com/50'
                                            size={24}
                                            name='John Doe'
                                            alt='John Doe'
                                        />
                                        <div className={styles.taskActivityContent}>
                                            <div className={styles.taskActivityTitle}>
                                                <p>
                                                    <span>John Doe</span>
                                                    <span>Assigned task to</span>
                                                    <span>John Doe</span>
                                                </p>
                                                <span>
                                                    <span>10 August</span>
                                                    <span></span>
                                                    <span>09:12 AM</span>
                                                </span>
                                            </div>
                                            <div className={styles.taskActivityBody}>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maxime?
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maxime?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    );
}