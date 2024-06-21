import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Organization = {
    id: '',
    name: '',
    departments: [],
    members: [],
    inviteLink: '',
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
        setOrgMembers: (state, {
            payload: payload,
        }: PayloadAction<CurrentUser[]>) => {
            state.members = [...payload];
        }
    }
});

export const { setOrganization, setOrgMembers } = organizationSlice.actions;

export default organizationSlice.reducer;

export const selectOrganization = (state: RootState) => state.organization;
export const selectOrgMembers = (state: RootState) => state.organization.members;
