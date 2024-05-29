import { useRef, useContext, createContext } from "react";
import { useClickOutside } from "@/utils/hooks";
import styles from "./PopUp.module.css";
import { capitalize } from "@/utils/helpers";

interface PopUpProps {
    children: React.ReactNode;
    position?: 'auto' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end';
};

// Clone only position type from PopUpProps
type PopUpPosition = Pick<PopUpProps, 'position'>;

const defaultObj: PopUpPosition = {position: 'auto'};

const PopUpContext = createContext(defaultObj);

export default function PopUp({children, position}: PopUpProps) {
    const popUpRef = useRef<HTMLDetailsElement | null>(null);
    useClickOutside(popUpRef, () => {
        if (popUpRef.current) {
            popUpRef.current.open = false;
        }
    });
    return (
        <PopUpContext.Provider value={{position}}>
            <details className={styles.popup} ref={popUpRef}>
                {children}
            </details>
        </PopUpContext.Provider>
    );
}

const PopUpSummary = ({children}: PopUpProps) => {
    return (
        <summary className={styles.popupSummary}>
            {children}
        </summary>
    );
};

const PopUpContent = ({ children }: PopUpProps) => {
    const { position } = useContext(PopUpContext);
    const parseStr = position ? capitalize(position) : 'Auto';
    const positionClass = `position${parseStr}`;

    return (
        <div className={`${styles.popupContent} ${styles[positionClass]}`}>
            {children}
        </div>
    );
};

PopUp.Summary = PopUpSummary;
PopUp.Content = PopUpContent;