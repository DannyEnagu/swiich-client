import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../ui/Input';
import styles from './Autocomplete.module.css';
import { useEffect, useRef, useState } from 'react';
import { faCaretDown, faCaretUp, faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '@/lib/hooks/useClickOutside';
import ProfileAvatar from '../ProfileAvatar';

// type optionTypes = Record<keyof any, any>;
export interface optionTypes {
    value: string;
    label: string;
}

interface AutocompleteProps {
    label: string;
    options: optionTypes[];
    showPopper?: boolean;
    border?: boolean;
    onChange?: (values: optionTypes[]) => void;
    type?: 'select' | 'input';
}

export default function CustomAutocomplete({
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
    const [filteredOptions, setFilteredOptions] = useState<optionTypes[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<optionTypes[]>([]);
    const dropdownOptions = filteredOptions.length > 0 ? filteredOptions : options;


    const autocompleteRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(autocompleteRef, () => {
        setShowDrop(false);
    });

    useEffect(() => {
        const values = inputValue.split(',');
        if (values.length > 1) {
            // Remove empty values and add the values to the options
            values.forEach(value => {
                if (value.trim() !== '') {
                    options.push({
                        value: value.trim(),
                        label: value.trim()
                    });
                }
            });
            setInputValue('');
        }
    }, [inputValue, options]);

    const handleChange = () => {
        // Pass the last selected option to the parent component
        if (options.length > 0 && type === 'input') {
            onChange && onChange([...options]);
        } else if (selectedOptions.length > 0 && type === 'select') {
            onChange && onChange([...selectedOptions]);
        }
    };

    useEffect(() => {
        if (!showDrop) {
            handleChange();
        }
       // eslint-disable-next-line
    }, [showDrop]);

    const addOrRemoveOption = (i: number, actionType: 'add' | 'sub'): void => {
        if (options.length > 0) {
            const selectedOption = options[i];
            switch (actionType) {
                case 'add':
                    // Check if the option is already selected
                    if (selectedOptions.find(option => option.value === selectedOption.value) !== undefined) {
                        return;
                    }
                    setSelectedOptions([...selectedOptions, selectedOption]);
                    break;
                case 'sub':
                    setSelectedOptions(selectedOptions.filter(option => option.value !== selectedOption.value));
                    if (type === 'input') {
                        options.splice(i, 1);
                    }
                    break;
                default:
                    setInputValue('');
                    break;
            }
        }
    };

    const checkSelectedOptions = (option: optionTypes): Boolean => {
        return selectedOptions.find(op => op.value === option.value) !== undefined ? true : false;
    };

    const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
        if (type === 'select') {
            // Filter the options
            const filteredOptions = options.filter(option => option.value.toLowerCase().includes(value.toLowerCase()));
            setFilteredOptions(filteredOptions);
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
                    {options.length > 0 && (
                        <>
                            {type === 'select' && (<>
                                    {selectedOptions.map((option, index) => (<span className={styles.selectedOptions}
                                    key={index + option.value}>
                                        <ProfileAvatar
                                            size={24}
                                            src={option.value.includes('/') ? option.value: ''}
                                            name={option.label}
                                            alt={`${option.label} Profile Icon`}
                                        />
                                        <span>
                                         {option.label}
                                        </span>
                                    </span>)
                                    )}
                                </>)
                            }
                            {type === 'input' && (
                                <span className={styles.firstOption}>
                                    <span>
                                        {options[options.length - 1]?.label}
                                    </span>
                                </span>
                            )}
                            {options.length > 1 && type === 'input' && (
                                <span className={styles.optionsCount}>
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        size='xs'
                                    />
                                    {options.length - 1}
                                </span>
                            )}
                        </>
                    )}
                    
                    <Input
                        type="text"
                        id="autocompleteInput"
                        className={`${styles.optionsLabelInput} ${
                            options.length > 0 ? styles.hasOptions : ''
                        }`}
                        value={inputValue}
                        onChange={(e) => filterOptions(e)}
                        onFocus={() => {
                            setIsFocus(true)
                            setShowDrop(true)
                        }}
                        onBlur={() => setIsFocus(false)}
                        placeholder={options.length > 0
                            ? type === 'select'
                                ? 'Select options'
                                : 'Add options'
                            : label
                        }
                    />
                </label>
                <span
                    className={`btn ${styles.autocompleteToggle}`}
                    onClick={() => setShowDrop(!showDrop)}
                    role='button'
                >
                    {!showDrop && (<FontAwesomeIcon icon={faCaretDown} />)}
                    {showDrop && (<FontAwesomeIcon icon={faCaretUp} />)}
                </span>
            </div>
            {showDrop && (
                <div className={styles.autocompleteDrop}>
                    {dropdownOptions.length > 0 && (
                        <ul role='list'>
                            {dropdownOptions.map((option, index) => (
                                <li key={index}>
                                    <span className='row align-center'>
                                        <span>
                                            {option.label}
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
                                        <span
                                            className={`btn ${styles.btnRemove}`}
                                            onClick={() => addOrRemoveOption(index, 'sub')}
                                            role='button'
                                        >
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                                size='2xs'
                                            />
                                        </span>
                                        {type === 'select' && (
                                            <span
                                                className={`btn ${styles.btnSelect}`}
                                                onClick={() => addOrRemoveOption(index, 'add')}
                                                role='button'
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                    size='2xs'
                                                />
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>)
                    }
                    {options.length < 1 && (
                        <span className={styles.noOptions}>
                            No data
                        </span>)
                    }
                </div>
            )}
        </div>)
}