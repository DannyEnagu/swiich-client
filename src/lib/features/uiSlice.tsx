import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const defaultActiveCanvas = {
    id: '',
    name: '',
    url: '',
    isRightSidebarOpen: false,
    rightSidebarContentType: 'thread' as const
}

const initialState: UISettings = {
    activeDepartment: {
        type: 'department',
        ...defaultActiveCanvas,
    },
    activeDM: {
        type: 'dm',
        ...defaultActiveCanvas
    },
    activeProject: {
        type: 'project',
        ...defaultActiveCanvas
    },
    profile: {
        type: 'profile',
        ...defaultActiveCanvas
    },
    activeThread: {
        type: 'thread',
        ...defaultActiveCanvas
    }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setActiveCanvas: (state, {
            payload: payload,
        }: PayloadAction<
            typeof initialState.activeProject |
            typeof initialState.activeDM |
            typeof initialState.activeDepartment |
            typeof initialState.profile |
            typeof initialState.activeThread
        >) => {
            if (payload?.type === 'project') {
                state.activeProject = { ...payload }
            } else if (payload?.type === 'department') {
                state.activeDepartment = { ...payload }
            } else if (payload?.type === 'dm') {
                state.activeDM = { ...payload }
            } else if (payload?.type === 'profile') {
                state.profile = { ...payload }
            } else if (payload?.type === 'thread') {
                state.activeThread = { ...payload }
            } else {
                throw new Error('Invalid type for active canvas.')
            }
        },
        closeActiveRightSidebar: (state, {
            payload: payload,
        }: PayloadAction<ActiveCanvas['type']>) => {
            if (payload === 'project') {
                state.activeProject.isRightSidebarOpen = false
            } else if (payload === 'department') {
                state.activeDepartment.isRightSidebarOpen = false
            } else if (payload === 'dm') {
                state.activeDM.isRightSidebarOpen = false
            } else if (payload === 'profile') {
                state.profile.isRightSidebarOpen = false
            } else if (payload === 'thread') {
                state.activeThread.isRightSidebarOpen = false
            } else {
                throw new Error('Invalid type for active canvas.')
            }
        },
    }
})

export const {
    setActiveCanvas,
    closeActiveRightSidebar
} = uiSlice.actions;

export default uiSlice.reducer;

export const selectActiveDepartment = (state: RootState) => state.ui.activeDepartment;
export const selectActiveDM = (state: RootState) => state.ui.activeDM;
export const selectActiveProject = (state: RootState) => state.ui.activeProject;
export const selectActiveProfile = (state: RootState) => state.ui.profile;
export const selectActiveThread = (state: RootState) => state.ui.activeThread;
