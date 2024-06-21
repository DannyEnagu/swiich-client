import { useEffect, useState } from 'react';
import { useAppSelector } from './storeHooks';
import {
    selectActiveProfile,
    selectActiveDM,
    selectActiveDepartment,
    selectActiveProject,
    selectActiveThread
} from '@/lib/features/uiSlice';
import { usePathname } from 'next/navigation';

// Define and return the active canvas
// based on the current pathname
// and one of the active canvases:
// 1. profile,
// 2. project,
// 3. department,
// 4. DM, and
// 5. thread
export default function useActiveCanvas() {
    const [activeCanvas, setActiveCanvas] = useState<ActiveCanvas | null>(null);
    const activeProfile = useAppSelector(selectActiveProfile);
    const activeProject = useAppSelector(selectActiveProject);
    const activeDepartment = useAppSelector(selectActiveDepartment);
    const activeDM = useAppSelector(selectActiveDM);
    const activeThread = useAppSelector(selectActiveThread);
    const pathname = usePathname();
    
    useEffect(() => {
      if (activeProfile?.isRightSidebarOpen && activeProfile.url === pathname) {
        setActiveCanvas(activeProfile);
        console.log(activeProfile, 'activeProfile')
      } else if (activeDepartment.url === pathname) {
        setActiveCanvas(activeDepartment);
        console.log(activeDepartment, 'activeDepartment')
      } else if (activeDM.url === pathname) {
        setActiveCanvas(activeDM);
        console.log(activeDM, 'activeDM')
      } else if (activeProject.url === pathname) {
        setActiveCanvas(activeProject);
        console.log(activeProject, 'activeProject')
      } else if (activeProject.url === pathname) {
        setActiveCanvas(activeProject);
        console.log(activeProject, 'activeProject')
      } else if (activeThread.url === pathname) {
        setActiveCanvas(activeProject);
        console.log(activeThread, 'activeThread')
      }
      else {
        setActiveCanvas(null);
      }
    }, [pathname, activeProject, activeProfile, activeDepartment, activeDM, activeThread]);
    
    return activeCanvas;
}