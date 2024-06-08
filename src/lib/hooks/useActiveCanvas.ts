import { useAppDispatch } from '@/lib/hooks/storeHooks';
import {
    setActiveCanvas,
    setRightCanvas,
    closeRightCanvas
} from '@/lib/features/uiSlice';

export default function useActiveCanvas() {
    const dispatch = useAppDispatch();
    const setCanvas = (canvas: Canvas) => {
        dispatch(setActiveCanvas(canvas));
    };
    const openRightSide = (canvas: CanvasRight) => {
        dispatch(setRightCanvas(canvas));
    };
    const closeRightSide = () => {
        dispatch(closeRightCanvas());
    };

    return {setCanvas, openRightSide, closeRightSide};
}