'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@/components/ui/Avatar/Avatar';
import styles from './ProfileView.module.css';
import Input from '@/components/ui/Input';
import GroupsInCommon from './GroupsView';
import Attachments from './AttachmentView';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import AccountSettings from './Account';
import { useAppSelector } from '@/lib/hooks/storeHooks';
import { selectRightCanvasState } from '@/lib/features/uiSlice';
import useActiveCanvas from '@/lib/hooks/useActiveCanvas';

export default function ProfileView() {
  const [inputValues, setInputValues] = useState({
    fullName: 'John Doe',
    phoneNumber: '+123 8267397732',
    emailAddress: 'JohnDoe@gmail.com',
    profilePic: '',
    pwdOld: '',
    pwdNew: '',
  });

  const rightCanvas = useAppSelector(selectRightCanvasState);

  const {data: session} = useSession();
  const isActiveUser = session?.user?.id === rightCanvas.contentID;

  const {closeRightSide: hideRightSide} = useActiveCanvas();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    })
    console.log(name, value)
  };

  const save = () => {};

  return (
    <div className={styles.wrapper}>
      <>
        <div className={styles.header}>
          <div className={styles.profileImg}>
            <Avatar imgSrc='' size={200} imgAlt='User name' />
            {isActiveUser && (
              <label htmlFor='file-picker' className={`btn btn-primary ${styles.filePicker}`}>
                <Input
                  type='file'
                  id='file-picker'
                  name='profilePic'
                  onChange={handleChange}
                />
                <FontAwesomeIcon icon={faPlus} size='xl' />
              </label>
            )}
          </div>
          <button onClick={() => hideRightSide()} className={`btn ${styles.closeButton}`}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <h3 className='row justify-between'>
              <span>User Information</span>
              <FontAwesomeIcon title='Click on the text =to change values' icon={faCircleInfo} />
            </h3>
            <p>
              <span className={styles.label}>Full Name:</span>
              <span className={`${styles.value} ${isActiveUser ? styles.bordered : ''}`}>
                <Input
                  type='text'
                  disabled={!isActiveUser}
                  value={inputValues.fullName}
                  onChange={handleChange}
                  name='fullName'
                  placeholder='Enter full name'
                />
              </span>
            </p>
            <p>
              <span className={styles.label}>Phone:</span>
              <span className={`${styles.value} ${isActiveUser ? styles.bordered : ''}`}>
                <Input
                  type='text'
                  value={inputValues.phoneNumber}
                  name='phoneNumber'
                  onChange={handleChange}
                  placeholder='Enter phone number'
                />
              </span>
            </p>
            <p>
              <span className={styles.label}>Email:</span>
              <span className={`${styles.value} ${isActiveUser ? styles.bordered : ''}`}>
                <Input
                  type='email'
                  value={inputValues.emailAddress}
                  name='emailAddress'
                  placeholder='Enter email address'
                  onChange={handleChange}
                />
              </span>
            </p>
          </div>
          {!isActiveUser && (
            <>
              <GroupsInCommon />
              <Attachments />
            </>
          )}
          {isActiveUser && (<>
            <div className={styles.password}>
              <h3>Change Password</h3>
              <p>
                <span className={styles.label}>Old Password:</span>
                <span className={`${styles.value} ${isActiveUser ? styles.bordered : ''}`}>
                  <Input
                    type='password'
                    value={inputValues.pwdOld}
                    name='pwdOld'
                    onChange={handleChange}
                    placeholder='Enter old password'
                  />
                </span>
              </p>
                <p>
                <span className={styles.label}>New Password:</span>
                <span className={`${styles.value} ${isActiveUser ? styles.bordered : ''}`}>
                  <Input
                    type='password'
                    value={inputValues.pwdNew}
                    name='pwdNew'
                    placeholder='Enter new password'
                    onChange={handleChange}
                  />
                </span>
              </p>
            </div>
            <AccountSettings />
          </>)}
        </div>
          {isActiveUser && (
            <div className={styles.formButtons}>
              <button className='btn btn-primary' onClick={() => hideRightSide() }>Cancel</button>
              <button className='btn btn-primary' onClick={() => save}>Save</button>
            </div>
          )}
      </>
    </div>
  );
}