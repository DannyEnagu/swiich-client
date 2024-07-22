'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UpdateForm, { CreateTeamState } from '../UpdateForm/UpdateForm';
import Modal from "../ui/Modal/Modal";
import styles from './CreateContact.module.css';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectOrganization } from '@/lib/features/organizationSlice';
import { useSession } from 'next-auth/react';
import { usePostPrivateMessageMutation } from '@/services/messages';
import customToast from '@/utils/toast';
import { usePostProjectMutation } from '@/services/reusableContextualMenuService';
import { addMenu } from '@/lib/features/reusableContextualMenuSlice';

export default function CreateProject({
    title,
    displayText
  }: CreateContactProps) {
    const dispatch = useAppDispatch();
    const orgID = useAppSelector(selectOrganization)?.id;
    const { data: session } = useSession();
    const [postProject, { isLoading }] = usePostProjectMutation();

    const Submit = async (values: CreateTeamState) => {
      console.log(values);
      try {
        const reqBody = {
          title: values.teamName,
          description: values.teamName,
          organisationId: parseInt(orgID as string),
          memberEmails: values.teamMembers
        };
        
        await postProject(reqBody).unwrap()
          .then((res) => {
              if (res?.isSuccess) {
                  const { message } = res;
                  console.log(res);
                  dispatch(addMenu(res.project));
                  customToast({
                      message: message,
                      type: 'success'
                  });
              }
          })
          .catch((error) => {
            const { data, status } = error;
            customToast({
                message: status === 500 ? 'Server error!': data.error,
                type: 'error'
            });
        });
      } catch (error) {
        console.error(error);
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
                title="Enter Project title"
                submitButtonLabel="Create Project"
                onSubmit={handleSubmit}
                isLoading={isLoading}
                autoCompleteType='input'
            />
          </Modal.Content>
        </Modal>
      </div>);
}