import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { stat } from "fs";

interface Messages {
    [key: string]: Message[];
};

const initialState: Messages = {};

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, {
            payload: payload,
        }: PayloadAction<{key: string, value: Message[]}>) => {
            state[payload.key] = payload.value;
        },
        addMessage: (state, {
            payload: payload,
        }: PayloadAction<{key: string, value: Message[]}>) => {
            if (state[payload.key]) {
                state[payload.key] = [...state[payload.key], ...payload.value];
            } else {
                state[payload.key] = payload.value;
            }
        },
        updateMessage: (state, {
            payload: payload,
        }: PayloadAction<{key: string, value: Message}>) => {
            if (state[payload.key]) {
                const index = state[payload.key]?.findIndex((msg) => msg.id === payload.value.id);
                if (index) {
                    state[payload.key]?.splice(index, 1, payload.value);
                }
            }
        },
        deleteMessage: (state, {
            payload: payload,
        }: PayloadAction<{key: string, value: Message}>) => {
            if (state[payload.key]) {
                const index = state[payload.key]?.findIndex((msg) => msg.id === payload.value.id);
                if (index) {
                    state[payload.key]?.splice(index, 1);
                }
            }  
        },
    },
});

export default messageSlice.reducer;

export const {
    setMessages,
    addMessage,
    updateMessage,
    deleteMessage
} = messageSlice.actions;

const selectMessages = (state: RootState) => state.messages;
const selectMessagesKey = (state: RootState, key: string) => key;

export const selectMessagesByKey = createSelector(
    [selectMessages, selectMessagesKey],
    (messages, key) => messages[key] || []
);