import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ReuseableMenu {
    [key: string]: NavProps[];
};

const initialState: ReuseableMenu = {};

const reuseableMenuSlice = createSlice({
    name: "contact",
    initialState: initialState,
    reducers: {
        addMenu: (state, { payload }: PayloadAction<NavProps[]>) => {
            const key = payload[0].type;
            state[key] = payload;
        },
        updateMenu: (state, { payload }: PayloadAction<NavProps>) => {
            const key = payload.type;
            const prevMenu = state[key];
            state[key] = [...prevMenu, payload];
        },
        removeMenu: (state, { payload }: PayloadAction<string>) => {
            delete state[payload];
        }
    }
});

export const { addMenu, updateMenu, removeMenu } = reuseableMenuSlice.actions;

export default reuseableMenuSlice.reducer;

const selectMenu = (state: RootState) => state.reuseableMenu;
const selectMenuKey = (state: RootState, key: string) => key;

export const selectMenuByType = createSelector(
    [selectMenu, selectMenuKey],
    (reuseableMenu, key) => reuseableMenu[key] || []
);