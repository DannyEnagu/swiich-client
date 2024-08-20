'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAdd, faEllipsisH, faEnvelopeOpen, faPaperclip, faSpinner, faTableList, faTag, faTasks, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCircle, faFileLines, faMessage } from '@fortawesome/free-regular-svg-icons';
import ChatBubble from '@/components/dashboard/ChatBubble/ChatBubble';
import ProfileAvatar from '@/components/ProfileAvatar';
import pdfImg from "../../../../../../../public/images/pdf-file.png";
import docImg from "../../../../../../../public/images/doc-file.png";
import styles from './Details.module.css';

export default function Details(task: Task) {
    const [activeTab, setActiveTab] = useState(1);
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: 'Checklist',
            isActive: false,
            unreadCount: 0
        },
        {
            id: 2,
            title: 'Comments',
            isActive: false,
            unreadCount: 0
        },
        {
            id: 3,
            title: 'Activities',
            isActive: false,
            unreadCount: 0
        }
    ]);

    return (
        <div>
            <header className={styles.taskHeader}>
                <h2 className='row align-center'>
                    <FontAwesomeIcon icon={faTasks} size='lg' />
                    {task.title}
                </h2>
            </header>
            <div className={styles.taskBody}>
                <section className={styles.taskDetails}>
                    <div className={styles.taskDetailsItem}>
                        <h4>
                            <FontAwesomeIcon icon={faCircle} size='lg' />
                            <span>Status</span>
                        </h4>
                        <span>
                            <FontAwesomeIcon icon={faSpinner} size='lg' />
                            {task.status}
                        </span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>
                            <FontAwesomeIcon icon={faCalendar} size='lg' />
                            <span>Due Date</span>
                        </h4>
                        <span>{task.deadline}</span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>
                             <FontAwesomeIcon icon={faTag} size='lg' />
                            <span>Priority</span>
                        </h4>
                        <span>
                            <span className={styles.taskPriorityBadge}>
                                <span className={styles.taskSeparator}/>
                                <span>
                                 {task.priority}
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className={styles.taskDetailsItem}>
                        <h4>
                            <FontAwesomeIcon icon={faUserGroup} size='lg' />
                            <span>Members</span>
                        </h4>
                        <span>{task?.assignees?.map(assignee => assignee.email).join(', ')}</span>
                    </div>
                    <div className={`${styles.taskDescription} ${styles.taskDetailsItem}`}>
                        <h4>
                            <FontAwesomeIcon icon={faFileLines} size='lg' />
                            <span>Description</span>
                        </h4>
                        <textarea
                            placeholder={task.description}
                            rows={5}
                        />
                    </div>
                </section>
                <section className={styles.taskAttachments}>
                    <h3>
                        <FontAwesomeIcon icon={faPaperclip} />
                        <span>Attachments</span>
                        <span>(2)</span>
                    </h3>
                    <div>
                        <div className={styles.taskAttachmentList}>
                            <div className={styles.taskAttachmentItem}>
                                <Image
                                    src={pdfImg}
                                    alt="PDF file"
                                />
                                <div className={styles.taskAttachmentDetails}>
                                    <h6>Attachment 1</h6>
                                    <span>
                                        <span>10.9 MB</span>
                                        <span className={styles.taskSeparator}/>
                                        <span>Download</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.taskAttachmentItem}>
                                <Image
                                    src={docImg}
                                    alt="PDF file"
                                />
                                <div className={styles.taskAttachmentDetails}>
                                    <h6>Attachment 2</h6>
                                    <span>
                                        <span>10.9 MB</span>
                                        <span className={styles.taskSeparator}/>
                                        <span>Download</span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.taskAttachmentItem}>
                                <Image
                                    src={pdfImg}
                                    alt="PDF file"
                                />
                                <div className={styles.taskAttachmentDetails}>
                                    <h6>Attachment 3</h6>
                                    <span>
                                        <span>10.9 MB</span>
                                        <span className={styles.taskSeparator}/>
                                        <span>Download</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.taskAttachmentAdd}>
                            <button className='btn'>
                            <FontAwesomeIcon icon={faAdd} size='lg' />
                            </button>
                        </div>
                    </div>
                </section>
                <section className={styles.taskTabs}>
                    <div className={styles.taskTabsHeader}>
                        {tabs.map(tab => (                    <button
                            key={tab.id}
                            className={`btn
                            ${styles.taskTabSwitch}
                            ${tab.id === activeTab ? styles.taskTabSwitchIsActive : ''}`} onClick={() => setActiveTab(tab.id)}
                            >
                            <span>{tab.title}</span>
                            {tab.unreadCount > 0 && <span className={styles.taskCount}>{tab.unreadCount}</span>
                            }
                        </button>))}
                    </div>
                    <div className={styles.taskTabsBody}>
                        <div className={`${styles.taskTab} ${activeTab === 1 ? styles.taskTabIsActive : ''}`}>
                            <div className={styles.taskTabHeader}>
                                <h3>
                                    {task.title} Checklist
                                </h3>
                                <div>
                                    2/4
                                </div>
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
                        <div className={`${styles.taskTab} ${activeTab === 2 ? styles.taskTabIsActive : ''}`}>
                            <div className={styles.taskTabHeader}>
                                <h3>Comments</h3>
                                <button className='btn'>
                                    <FontAwesomeIcon icon={faEllipsisH} size='lg' />
                                </button>
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
                                        message=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, tempore nisi. Repudiandae reprehenderit inventore eos repellat dolores dolor. Quaerat sapiente aspernatur aliquam! Enim dolores non amet reiciendis ab sit possimus, tempora esse sint distinctio fugit officia optio nobis accusamus impedit nam porro. Expedita quibusdam consequatur pariatur, fugit facilis sint nisi.'
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
                                            <textarea
                                            rows={2}
                                             placeholder='Write a comment...' />
                                            <button className='btn btn-outline-primary'>
                                                <FontAwesomeIcon icon={faPaperclip} />
                                            </button>
                                            <button className='btn btn-primary'>
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.taskTab} ${activeTab === 3 ? styles.taskTabIsActive : ''}`}>
                            <div className={styles.taskTabHeader}>
                                <h3>Activities</h3>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                                    <span>Mark as read</span>
                                </div>
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
                                                    <strong>John Doe</strong>
                                                    <span>Assigned task to </span>
                                                    <strong>John Doe</strong>
                                                </p>
                                                <p>
                                                    <span>
                                                        10 August
                                                    </span>
                                                    <span className={styles.taskSeparator}/>
                                                    <span>
                                                        09:12 AM
                                                    </span>
                                                </p>
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