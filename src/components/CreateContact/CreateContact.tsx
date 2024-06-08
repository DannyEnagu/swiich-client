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
import { usePathname } from 'next/navigation';
import { getOrgID } from '@/utils/helpers';

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
  const currPathname = usePathname();
  const orgID = getOrgID(currPathname);

  const Submit = async (values: CreateTeamState) => {
    try {
      const reqBody = {
        userId: session?.user?.id,
        organisationId: parseInt(orgID),
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
            copyLink="https://www.google.com"
            submitButtonLabel="Create Group"
            emailList={[]}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Modal.Content>
      </Modal>
    </div>);
}