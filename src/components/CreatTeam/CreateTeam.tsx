import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../ui/Input';
import styles from './CreateTeam.module.css';
import { faClone } from '@fortawesome/free-regular-svg-icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { faCaretDown, faCaretUp, faCheck, faMinus, faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '@/utils/hooks';

export default function CreateTeam() {
    const copyInputRef = useRef<HTMLInputElement | null>(null);
    const uploadInputRef = useRef<HTMLInputElement | null>(null);
    const [inputValues, setInputValues] = useState({
        teamName: '',
        teamMembers: '',
        teamLogo: '',
        teamLink: ''
    });

    const onCustomAutocompleteChange = useCallback((values: string[]) => {
        console.log(values);
    }, []);

    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValues({
            ...inputValues,
            [e.target.id]: value
        });
        console.log(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                    type="submit"
                    className='btn btn-primary'
                >Create</button>
            </div>
        </form>
    )
}

interface AutocompleteProps {
    label: string;
    options: string[];
    showPopper?: boolean;
    border?: boolean;
    onChange?: (value: string[]) => void;
    type?: 'select' | 'input';
}

function CustomAutocomplete({
    label,
    options,
    showPopper = false,
    border = true,
    onChange,
    type = 'input'
}: AutocompleteProps) {
    const [showDrop, setShowDrop] = useState(showPopper);
    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [getOptions, setOptions] = useState(options);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const autocompleteRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(autocompleteRef, () => {
        setShowDrop(false);
    });

    useEffect(() => {
        const values = inputValue.split(',');
        if (values.length > 1) {
            values.map((value, i) => {
                if (value.trim() === '') {
                    values.splice(i, 1);
                }
                return value.trim();
            });
            setInputValue('');
            setOptions([...getOptions, ...values]);
        }


    }, [inputValue, getOptions]);



    useEffect(() => {
        if (selectedOptions.length > 0 && type === 'input') {
            onChange && onChange(getOptions);
        } else if (selectedOptions.length > 0 && type === 'select') {
            onChange && onChange(selectedOptions);
        }
    }, [getOptions, onChange, selectedOptions, type]);

    const addOrRemoveOption = (i: number, actionType: 'add' | 'sub'): void => {
        if (getOptions.length > 0) {
            const selectedOption = getOptions[i];
            switch (actionType) {
                case 'add':
                    // Check if the option is already selected
                    if (selectedOptions.find(option => option === selectedOption) !== undefined) {
                        return;
                    }
                    setSelectedOptions([...selectedOptions, selectedOption]);
                    break;
                case 'sub':
                    setSelectedOptions(selectedOptions.filter(option => option !== selectedOption));
                    if (type === 'input') {
                        setOptions(getOptions.filter(option => option !== selectedOption));
                    }
                    break;
                    default:
                    setInputValue('');
                    break;
            }
        }
    };

    const checkSelectedOptions = (option: string): Boolean => {
        return selectedOptions.find(op => op === option) !== undefined ? true : false;
    };

    const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        if (value === '') {
            setOptions(options);
        } else {
            if (type === 'select') {
                setOptions(options.filter(option => !selectedOptions.includes(option) && option.toLowerCase().includes(value.toLowerCase())));
            }
        }
    };

    return (
        <div
            ref={autocompleteRef}
            className={`${styles.autocomplete} ${ border ? styles.autocompleteBordered: ''} ${isFocus ? styles.autocompleteIsFocused : ''}`
        }
        >
            <div className={styles.textField}>
                <label
                    htmlFor="autocompleteInput"
                    className={styles.optionsLabel}
                    >
                    {getOptions.length > 0 && (
                        <span>
                            {type === 'select' && (<>
                                    {selectedOptions.map((option, index) => (<span className={styles.selectedOptions}
                                    key={index + option}>
                                        {option}
                                    </span>)
                                    )}
                                </>)
                            }
                            {type === 'input' && (
                                <span className={styles.firstOption}>
                                    <span>
                                        {getOptions[getOptions.length - 1]}
                                    </span>
                                </span>
                            )}
                            {getOptions.length > 1 && type === 'input' && (
                                <span className={styles.optionsCount}>
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        size='xs'
                                    />
                                    {getOptions.length - 1}
                                </span>
                            )}
                        </span>
                    )}
                    <Input
                        type="text"
                        id="autocompleteInput"
                        className={`${
                            getOptions.length > 0 ? styles.hasOptions : ''
                        }`}
                        value={inputValue}
                        onChange={(e) => filterOptions(e)}
                        onFocus={() => {
                            setIsFocus(true)
                            setShowDrop(true)
                        }}
                        onBlur={() => setIsFocus(false)}
                        placeholder={getOptions.length > 0 ? '' : label}
                    />
                </label>
                <button
                    className={`btn ${styles.autocompleteToggle}`}
                    onClick={() => setShowDrop(!showDrop)}
                >
                    {!showDrop && (<FontAwesomeIcon icon={faCaretDown} />)}
                    {showDrop && (<FontAwesomeIcon icon={faCaretUp} />)}
                </button>
            </div>
            {showDrop && (
                <div className={styles.autocompleteDrop}>
                    {getOptions.length > 0 && (
                        <ul role='list'>
                            {getOptions.map((option, index) => (
                                <li key={index}>
                                    <span className='row align-center'>
                                        <span>
                                            {option}
                                        </span>
                                        {type === 'select' && checkSelectedOptions(option) && (
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                size='xs'
                                                className={styles.selectedIcon}
                                            />
                                        )}
                                    </span>
                                    <span className={styles.optionActionsBtn}>
                                        <button
                                            className={`btn ${styles.btnRemove}`}
                                            onClick={() => addOrRemoveOption(index, 'sub')}
                                        >
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                                size='2xs'
                                            />
                                        </button>
                                        {type === 'select' && (
                                            <button
                                                className={`btn ${styles.btnSelect}`}
                                                onClick={() => addOrRemoveOption(index, 'add')}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    size='2xs'
                                                />
                                            </button>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>)
                    }
                    {getOptions.length < 1 && (
                        <span className={styles.noOptions}>
                            No data
                        </span>)
                    }
                </div>
            )}
        </div>)
}