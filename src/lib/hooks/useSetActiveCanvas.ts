import { useAppDispatch } from '@/lib/hooks/storeHooks';
import { setActiveCanvas } from '@/lib/features/uiSlice';

export default function useSetActiveCanvas() {
    const dispatch = useAppDispatch();
    return (canvas: Canvas) => {
        dispatch(setActiveCanvas(canvas));
    };
}