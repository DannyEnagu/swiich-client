import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CurrentUser } from "@/types";

export interface AuthType {
  user: CurrentUser | null;
  token: string;
}

const initialState: AuthType = {
  user: null,
  token: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, {
      payload: { user, token },
    }: PayloadAction<AuthType>) => {
      state.user = user;
      state.token = token;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = '';
    },
  }
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;