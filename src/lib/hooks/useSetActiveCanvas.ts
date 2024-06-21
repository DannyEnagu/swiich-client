import { useAppDispatch } from '@/lib/hooks/storeHooks';
import {
    setActiveCanvas,
    closeActiveRightSidebar
} from '@/lib/features/uiSlice';

export default function useSetActiveCanvas() {
    const dispatch = useAppDispatch();
    const switchOpenCanvas = (canvas: ActiveCanvas) => {
        dispatch(setActiveCanvas(canvas));
    }
    const closeRightSidebar = (type: ActiveCanvas['type']) => {
        dispatch(closeActiveRightSidebar(type));
    }

    return {
        switchOpenCanvas,
        closeRightSidebar
    };
}

