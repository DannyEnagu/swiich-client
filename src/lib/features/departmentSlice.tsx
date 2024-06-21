import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Department[] = [];

const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        setDepartments: (state, {
            payload: payload,
        }: PayloadAction<Department[]>) => {
            const departments = payload;
            const newState = departments.map((dept) => {
                return {
                    ...dept,
                    members: [],
                }
            });
            state.push(...newState);
        },
        addDept: (state, {
            payload: payload,
        }: PayloadAction<Department>) => {
            state.push(payload);
        },
        updateDept: (state, {
            payload: payload,
        }: PayloadAction<Department>) => {
            const index = state.findIndex((dept) => dept.id === payload.id);
            state[index] = payload;
        },
        updateDeptMembers: (state, {
            payload: payload,
        }: PayloadAction<Department>) => {
            const index = state.findIndex((dept) => dept.id === payload.id);
            
            if (index > -1) {
                state[index].members = payload.members;
            }
        },
    }
});

export const {
    setDepartments,
    addDept,
    updateDept,
    updateDeptMembers
} = departmentSlice.actions;

export default departmentSlice.reducer;

export const selectDept = (state: RootState) => state.departments;
export const selectDeptByID = (state: RootState, id: Department['id']) => state.departments.find((dept) => dept.id === id);
