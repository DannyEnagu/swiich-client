'use client'
import { useEffect, useState } from 'react';
import RightSide from './RightSide/RightSide';
import { selectRightCanvasState } from '@/lib/features/uiSlice';
import styles from './dashboard.module.css';
import { useAppSelector } from '@/lib/hooks/storeHooks';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({
  children }: MainProps
) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rightSideCanvas = useAppSelector(selectRightCanvasState);
    
    
    useEffect(() => {
      setIsOpen(rightSideCanvas.isOpen);
    }, [rightSideCanvas.isOpen])

  return (
    <div className={styles.MainContainer}>
      { children }
      {/* Display the right sidebar if the prop is true */}
      {isOpen && (<RightSide contentType={rightSideCanvas.content} />)}
    </div>
  );
}