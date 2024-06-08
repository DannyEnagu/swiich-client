import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


const initialState: UISettings = {
    rightCanvas: {
        content: 'thread',
        contentID: '',
        isOpen: false
    },
    activeCanvas: {
        id: '',
        name: '',
        url: ''
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveCanvas: (state, {
            payload: payload,
        }: PayloadAction<typeof initialState.activeCanvas>) => {
            state.activeCanvas = payload
        },
        setRightCanvas: (state, {
            payload: payload,
        }: PayloadAction<typeof initialState.rightCanvas>) => {
            state.rightCanvas = payload
        },
        closeRightCanvas: (state) => {
            state.rightCanvas.isOpen = false
        },
    }
})

export const { setActiveCanvas, setRightCanvas, closeRightCanvas } = uiSlice.actions;

export default uiSlice.reducer;

export const selectActiveCanvas = (state: RootState) => state.ui.activeCanvas;

export const selectRightCanvasState = (state: RootState) => state.ui.rightCanvas;