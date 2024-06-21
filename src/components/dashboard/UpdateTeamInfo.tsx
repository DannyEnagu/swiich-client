import { useSession } from 'next-auth/react';
import customToast from '@/utils/toast';
import { selectOrganization, setOrganization } from '@/lib/features/organizationSlice';
import { useAppDispatch, useAppSelector } from "@/lib/hooks/storeHooks";
import { useUpdateOrgDetailsMutation } from '@/services/organization';
import { useCallback } from 'react';
import { CreateTeamState } from '../UpdateForm/UpdateForm';
import UpdateForm from '../UpdateForm/UpdateForm';

export default function UpdateTeamInfo() {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const [updateOrgDetails, { isLoading }] = useUpdateOrgDetailsMutation();
  const org = useAppSelector(selectOrganization);
  const mailingList = org?.members.map((user) => user?.email) || [];

  const Submit = async (values: CreateTeamState) => {
      console.log(values);
      try {
        const reqBody = {
          userId: session?.user?.id,
          name: values.teamName,
          users: values.teamMembers,
        };
        
        await updateOrgDetails(reqBody).unwrap()
          .then((res) => {
              if (res?.isSuccess) {
                const { isSuccess, message, ...rest } = res;
                customToast({
                    message: message,
                    type: 'success'
                });
                dispatch(setOrganization({ ...rest }))
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

  const handleSubmit = useCallback(Submit, [updateOrgDetails, dispatch, session]);

  return (
    <UpdateForm
      title="Edit organization name"
      defaultName={org?.name}
      copyLink={org?.inviteLink}
      emailingList={mailingList}
      submitButtonLabel="Submit"
      autoCompleteLabel='Add or remove members by email address'
      autoCompleteType='select'
      onSubmit={handleSubmit}
      isLoading={isLoading}
    />
  );
}