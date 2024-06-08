import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Department = {
    id: '',
    name: '',
    organisationID: '',
    createdAt: '',
    updatedAt: ''
};

const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        setDept: (state, {
            payload: payload,
        }: PayloadAction<Organization>) => {
            Object.assign(state, payload)
        },
    }
});

export const { setDept } = departmentSlice.actions;

export default departmentSlice.reducer;

export const selectDept = (state: RootState) => state.organization;
