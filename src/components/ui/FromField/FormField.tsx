
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../Input';
import styles from './FormField.module.css';
import { FormFieldProps } from '@/types';

export default function FormField({ 
    type,
    name,
    placeholder,
    register,
    error,
    valueAsNumber,
    iconType
}: FormFieldProps) {
    return (
        <>
            <div className={styles.formField}>
                <div className={styles.formGroup}>
                    <label className='sr-only' htmlFor={name}>
                        {name}
                    </label>
                    <FontAwesomeIcon
                        icon={iconType}
                        className={styles.inputIcon}
                        size='sm'
                    />
                    <Input
                        {...register(name, { valueAsNumber })}
                        name={name}
                        id={name}
                        type={type}
                        placeholder={placeholder}
                    />
                </div>
                {error && <p className={styles.errorMsg}>{error.message}</p>}
            </div>
        </>
    );
}