'use client';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UpdateForm, { CreateTeamState } from '../UpdateForm/UpdateForm';
import Modal from "../ui/Modal/Modal";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectOrganization } from '@/lib/features/organizationSlice';
import { useSession } from 'next-auth/react';
import customToast from '@/utils/toast';
import { usePostProjectMutation } from '@/services/reusableContextualMenuService';
import { addMenu } from '@/lib/features/reusableContextualMenuSlice';
import styles from './CreateContact.module.css';

export default function CreateProject({
    title,
    displayText
  }: CreateContactProps) {
    const dispatch = useAppDispatch();
    const orgID = useAppSelector(selectOrganization)?.id;
    const { data: session } = useSession();
    const [isCreating, setIsCreating] = useState(false);
    const [postProject] = usePostProjectMutation();

    const Submit = async (values: CreateTeamState) => {
      setIsCreating(true);
      try {
        const reqBody = {
          title: values.teamName,
          description: values.teamName,
          organisationId: parseInt(orgID as string),
          memberEmails: values.teamMembers
        };
        
        const res = await postProject(reqBody).unwrap()
        const { message, project } = res;
        dispatch(addMenu({
          type: 'board',
          isStarred: false,
          boardName: project.title,
          boardImg: '',
          boardID: project.id,
          boardTasks: [],
          description: project.description,
        }));
        customToast({
          message: message,
          type: 'success'
        });
        setIsCreating(false);
      } catch (error) {
        console.error(error);
        customToast({
          message: 'Operation failed!',
          type: 'error'
        });
        setIsCreating(false);
      }
    };
  
    const handleSubmit = useCallback(Submit, [dispatch, postProject, orgID]);

    return (<div className={styles.createWrapper}>
        <Modal title={title}>
          <Modal.Summary>
            <span className="py-sm row">
              <FontAwesomeIcon className={styles.createIcon} icon={faPlus} size="xl" />
              <span className={`mx-sm ${styles.createLabel}`}>
                {displayText}
              </span>
            </span>
          </Modal.Summary>
          <Modal.Content>
            <UpdateForm
                title="Enter project title"
                submitButtonLabel="Create Project"
                onSubmit={handleSubmit}
                isLoading={isCreating}
                autoCompleteType='input'
            />
          </Modal.Content>
        </Modal>
      </div>);
}