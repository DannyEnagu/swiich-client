'use client';

import * as React from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { useAppSelector } from '@/lib/hooks/storeHooks';
import { selectActiveCanvas } from '@/lib/features/uiSlice';
export interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavItemProps>((props, ref) => {
    const { children, className } = props;
    const activeCanvas = useAppSelector(selectActiveCanvas);
    const [isActive, setIsActive] = React.useState(false);
    React.useEffect(() => {
        if (activeCanvas.url === props.href) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [activeCanvas.url, props.href]);
    
    return (
        <Link
          {...props}
          ref={ref}
          className={`${className} ${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
          href={props.href ?? ''}
        >{children}</Link> 
    );
});

NavLink.displayName = 'NavLink';

export default NavLink;
