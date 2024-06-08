import { useSession } from 'next-auth/react';
import customToast from '@/utils/toast';
import { setOrganization } from '@/lib/features/organizationSlice';
import { useAppDispatch } from "@/lib/hooks/storeHooks";
import { useAddOrganizationMutation } from '@/services/organization';
import { useCallback } from 'react';
import { CreateTeamState } from '../UpdateForm/UpdateForm';
import UpdateForm from '../UpdateForm/UpdateForm';

export default function CreateTeam() {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();
    const [addOrganization, { isLoading }] = useAddOrganizationMutation();

    const Submit = async (values: CreateTeamState) => {
        try {
          const reqBody = {
            userId: session?.user?.id,
            name: values.teamName
          };
          
          await addOrganization(reqBody).unwrap()
            .then((res) => {
                if (res?.isSuccess) {
                    const { isSuccess, message, ...rest } = res;
                    customToast({
                        message: message,
                        type: 'success'
                    });
                    dispatch(
                        setOrganization({ ...rest })
                    )
                    console.log(res);
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
    
      const handleSubmit = useCallback(Submit, [addOrganization, dispatch, session]);
    return (
        <UpdateForm
        title="Enter Team name"
        copyLink="https://www.google.com"
        submitButtonLabel="Create Team"
        emailList={[]}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    );
}