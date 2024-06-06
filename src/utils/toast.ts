import { toast } from 'react-toastify';

interface TypeCustomToast {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    className?: string;
}

export default function customToast({ message, type, position, className='' }: TypeCustomToast) {
    toast(message, {
        position: position || 'top-right',
        type: type,
        className: className
    });
}