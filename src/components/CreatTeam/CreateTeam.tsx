import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../ui/Input';
import styles from './CreateTeam.module.css';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { useCallback, useRef, useState } from 'react';
import { faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import CustomAutocomplete from '../CustomAutocomplete/CustomAutocomplete';
import { useAppDispatch } from "@/lib/hooks/storeHooks";
import { useAddOrganizationMutation } from '@/services/organization';
import customToast from '@/utils/toast';
import { setOrganization } from '@/lib/features/organizationSlice';
import { useSession } from 'next-auth/react';


export default function CreateTeam() {
    const { data: session } = useSession();
    const dispatch = useAppDispatch();
    const [addOrganization, { isLoading }] = useAddOrganizationMutation();
    const copyInputRef = useRef<HTMLInputElement | null>(null);
    const uploadInputRef = useRef<HTMLInputElement | null>(null);
    const [inputValues, setInputValues] = useState({
        teamName: '',
        teamMembers: [''],
        teamLogo: '',
        teamLink: ''
    });

    const onCustomAutocompleteChange = useCallback((values: string[]) => {
        setInputValues({
            ...inputValues,
            teamMembers: values
        });
    }, [inputValues]);

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValues({
            ...inputValues,
            [e.target.id]: value
        });
        console.log(value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const reqBody = {
                userId: session?.user?.id,
                name: inputValues.teamName
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
    }
    const copyToClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Copy to clipboard
        copyInputRef.current?.select();
        navigator.clipboard.writeText(copyInputRef.current?.value || '');
    }
    const IgnoreChanges = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Close the modal
        console.log('Ignore Changes');
    }
    const options: string[] = ['email1', 'email2', 'email3.com', 'email4', 'email5',
    'mail1', 'mail2.com', 'mail3', 'mail4', 'mail5',
    'gmail1', 'gmail2.com', 'gmail3', 'gmail4', 'gmail5',
    'yahoo1.com', 'yahoo2', 'yahoo3', 'yahoo4', 'yahoo5',
    'outlook1', 'outlook2.com', 'outlook3', 'outlook4', 'outlook5'
    ];

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <div className={styles.formGroup}>
                <label htmlFor="teamName">Enter your team name</label>
                <Input
                    type="text"
                    id="teamName"
                    value={inputValues.teamName}
                    onChange={handelChange}
                    placeholder='Enter team name'
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="teamMembers">Add team members by email</label>
                <div className={styles.emails}>
                    <div className={styles.addEmails}>
                    <CustomAutocomplete
                        label='Enter email address(s) separated by commas'
                        options={options}
                        onChange={(value) => onCustomAutocompleteChange(value)}
                        type='input'
                    />
                    </div>
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="teamLogo">
                    Upload team logo
                </label>
                <div className={styles.upLoadArea}>
                    <label htmlFor="teamLogo">
                        <FontAwesomeIcon icon={faUpload} />
                        <Input
                            type="file"
                            id="teamLogo"
                            multiple={false}
                            accept='png, jpg, jpeg'
                            ref={uploadInputRef}
                        />
                        <span>Click to upload</span>
                        or drag and drop
                    </label>
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="teamLink">Copy Link</label>
                <div className={styles.copyLink}>
                    <Input
                        disabled
                        type="text"
                        id="teamLink"
                        ref={copyInputRef}
                        value="https://www.example.com"
                        onChange={() => handelChange}
                    />
                    <button
                        onClick={copyToClipboard}
                        className={`btn ${styles.btnCopy}`}
                    >
                        <span>Copy</span>
                        <FontAwesomeIcon icon={faClone} />
                    </button>
                </div>
            </div>
            <div className={styles.formButtons}>
                <button
                    onClick={IgnoreChanges}
                    className='btn btn-outline-primary'
                >Cancel</button>
                <button
                    disabled={isLoading || !inputValues.teamName}
                    type="submit"
                    className='btn btn-primary'
                >
                    {isLoading
                        ? <FontAwesomeIcon
                            icon={faSpinner}
                            spinPulse
                        />
                        : 'Create Team'}
                </button>
            </div>
        </form>
    )
}