'use client'
import { useEffect, useState } from 'react';
import RightSide from './RightSide/RightSide';
import useActiveCanvas from '@/lib/hooks/useActiveCanvas';
import styles from './dashboard.module.css';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({
  children }: MainProps
) {
  const activeCanvas = useActiveCanvas(); 

  return (
    <div className={styles.MainContainer}>
      { children }
      {/* Display the right sidebar if the prop is true */}
      {activeCanvas?.isRightSidebarOpen && (<RightSide contentType={activeCanvas.rightSidebarContentType} />)}
    </div>
  );
}