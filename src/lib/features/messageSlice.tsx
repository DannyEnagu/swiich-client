import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: Message[] = [];

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, {
            payload: payload,
        }: PayloadAction<Message[]>) => {
            state.push(...payload);
        },
        addMessage: (state, {
            payload: payload,
        }: PayloadAction<Message>) => {
            state.push(payload);
        },
        updateMessage: (state, {
            payload: payload,
        }: PayloadAction<Message>) => {
            const index = state.findIndex((msg) => msg.id === payload.id);
            state[index] = payload;
        },
        deleteMessage: (state, {
            payload: payload,
        }: PayloadAction<Message>) => {
            const index = state.findIndex((msg) => msg.id === payload.id);
            state.splice(index, 1);
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

export const selectMessagesByDepartmentID = (state: RootState, departmentID: Department['id']) => state.messages.filter((msg) => msg.departmentId === departmentID);

export const selectMessagesByUserID = (state: RootState, userID: CurrentUser['id']) => state.messages.filter((msg) => msg.senderId === userID || msg.recipientId === userID);
