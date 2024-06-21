import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';
import Modal from "../ui/Modal/Modal";
import styles from './CreateContact.module.css';
import UpdateForm from '../UpdateForm/UpdateForm';
import customToast from '@/utils/toast';
// import { useAppDispatch } from "@/lib/hooks/storeHooks";
import { useAddDeptMutation } from '@/services/department';
import { useCallback } from 'react';
import { CreateTeamState } from '../UpdateForm/UpdateForm';
import { useAppSelector } from '@/lib/hooks/storeHooks';
import { selectOrganization } from '@/lib/features/organizationSlice';

export interface CreateContactProps {
  title: string | undefined;
  displayText: string | undefined;
}

export default function CreateContact ({
  title,
  displayText
}: CreateContactProps) {
  const { data: session } = useSession();
  // const dispatch = useAppDispatch();
  const [addDept, { isLoading }] = useAddDeptMutation();
  const orgID = useAppSelector(selectOrganization)?.id;

  const Submit = async (values: CreateTeamState) => {
    console.log(values);
    try {
      const reqBody = {
        userId: session?.user?.id,
        organisationId: parseInt(orgID as string),
        departmentName: values.teamName
      };
      
      await addDept(reqBody).unwrap()
        .then((res) => {
            if (res?.isSuccess) {
                const { message } = res;
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

  const handleSubmit = useCallback(Submit, [addDept, session, orgID]);

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
            title="Enter group name"
            submitButtonLabel="Create Group"
            onSubmit={handleSubmit}
            isLoading={isLoading}
            autoCompleteType='input'
          />
        </Modal.Content>
      </Modal>
    </div>);
}