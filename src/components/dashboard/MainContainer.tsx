'use client'
import { useEffect, useState } from 'react';
import RightSide from './RightSide/RightSide';
import { selectRightCanvasState, selectActiveCanvas } from '@/lib/features/uiSlice';
import styles from './dashboard.module.css';
import { useAppSelector } from '@/lib/hooks/storeHooks';
import { usePathname } from 'next/navigation';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({
  children }: MainProps
) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const rightSideCanvas = useAppSelector(selectRightCanvasState);
    const pathname = usePathname();
    const activeCanvas = useAppSelector(selectActiveCanvas);
    
    
    useEffect(() => {
      setIsOpen(rightSideCanvas.isOpen);
    }, [rightSideCanvas.isOpen]);

    // useEffect(() => {
    //   console.log(pathname,'path', activeCanvas.url, 'url')
    //   if (pathname !== activeCanvas.url) {
    //     setIsOpen(false);
    //   }
    // }, [pathname, activeCanvas.url]);

  return (
    <div className={styles.MainContainer}>
      { children }
      {/* Display the right sidebar if the prop is true */}
      {isOpen && (<RightSide contentType={rightSideCanvas.content} />)}
    </div>
  );
}