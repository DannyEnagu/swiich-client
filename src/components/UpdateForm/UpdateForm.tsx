import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../ui/Input';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { useCallback, useRef, useState } from 'react';
import { faSpinner, faUpload } from '@fortawesome/free-solid-svg-icons';
import CustomAutocomplete from '../CustomAutocomplete/CustomAutocomplete';
import styles from './UpdateForm.module.css';

interface CreateTeamProps {
    title: string;
    defaultName?: string;
    copyLink?: string;
    submitButtonLabel: string;
    emailingList?: string[];
    isLoading?: boolean;
    autoCompleteType?: 'select' | 'input';
    autoCompleteLabel?: string;
    onSubmit: (values: CreateTeamState) => void;
}

export interface CreateTeamState {
    teamName: string;
    teamMembers: string[];
    teamLogo: string;
}

export default function UpdateForm({
    title,
    defaultName,
    copyLink,
    submitButtonLabel,
    emailingList=[],
    onSubmit,
    isLoading = false,
    autoCompleteType = 'input',
    autoCompleteLabel
}: CreateTeamProps) {
    const copyInputRef = useRef<HTMLInputElement | null>(null);
    const [inputValues, setInputValues] = useState<CreateTeamState>({
        teamName: '',
        teamMembers: [],
        teamLogo: '',
    });

    const onCustomAutocompleteChange = useCallback((value: string) => {
        if (!value || value === '') return;
        setInputValues((prev) => {
            return {
                ...prev,
                teamMembers: [...prev.teamMembers, value.trim()]
            }
        
        });
    }, []);

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValues({
            ...inputValues,
            [e.target.id]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(inputValues);
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

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <div className={styles.formGroup}>
                <label htmlFor="teamName">{title}</label>
                <Input
                    type="text"
                    id="teamName"
                    value={inputValues.teamName || defaultName}
                    onChange={handelChange}
                    placeholder={title}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="teamMembers">
                    {autoCompleteLabel || 'Add team members'}
                </label>
                <div className={styles.emails}>
                    <div className={styles.addEmails}>
                    <CustomAutocomplete
                        label='Enter email address(s) separated by commas'
                        options={emailingList}
                        onChange={onCustomAutocompleteChange}
                        type={autoCompleteType}
                    />
                    </div>
                </div>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="teamLogo">
                    Upload logo
                </label>
                <div className={styles.upLoadArea}>
                    <label htmlFor="teamLogo">
                        <FontAwesomeIcon icon={faUpload} />
                        <Input
                            type="file"
                            id="teamLogo"
                            multiple={false}
                            value={inputValues.teamLogo}
                            onChange={() => handelChange}
                            accept='png, jpg, jpeg'
                        />
                        <span>Click to upload</span>
                        or drag and drop
                    </label>
                </div>
            </div>
            {copyLink && (
                <div className={styles.formGroup}>
                    <label htmlFor="teamLink">Copy Link</label>
                    <div className={styles.copyLink}>
                        <Input
                            disabled
                            type="text"
                            id="teamLink"
                            ref={copyInputRef}
                            value={copyLink}
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
            )}
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
                        : submitButtonLabel}
                </button>
            </div>
        </form>
    )
}