import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Organization = {
    id: '',
    name: '',
    departments: [],
    createdAt: '',
    updatedAt: ''
};

const organizationSlice = createSlice({
    name: "organization",
    initialState,
    reducers: {
        setOrganization: (state, {
            payload: payload,
        }: PayloadAction<Organization>) => {
            Object.assign(state, payload)
        },
    }
});

export const { setOrganization } = organizationSlice.actions;

export default organizationSlice.reducer;

export const selectOrganization = (state: RootState) => state.organization;
