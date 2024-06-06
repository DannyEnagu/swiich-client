import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../ui/Input';
import styles from './Autocomplete.module.css';
import { useEffect, useRef, useState } from 'react';
import { faCaretDown, faCaretUp, faCheck, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '@/lib/hooks/useClickOutside';


interface AutocompleteProps {
    label: string;
    options: string[];
    showPopper?: boolean;
    border?: boolean;
    onChange?: (value: string[]) => void;
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
                        className={`${styles.optionsLabelInput} ${
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
                    {getOptions.length < 1 && (
                        <span className={styles.noOptions}>
                            No data
                        </span>)
                    }
                </div>
            )}
        </div>)
}