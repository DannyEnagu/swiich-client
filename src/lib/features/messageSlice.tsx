import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


const initialState = new Map<string, Message[]>();

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, {
            payload: payload,
        }: PayloadAction<Message[]>) => {
            payload.forEach((msg) => {
                if (msg.messageType === 'private') {
                    const dmKey = `dm-${msg.senderId}-${msg.recipientId}`;
                    if (state.has(dmKey)) {
                        state.get(dmKey)?.push(msg);
                    } else {
                        state.set(dmKey, [msg]);
                    }
                } else {
                    const groupKey = `group-${msg.departmentId}`;
                    if (state.has(groupKey)) {
                        state.get(groupKey)?.push(msg);
                    } else {
                        state.set(groupKey, [msg]);
                    }
                }
            });
        },
        addMessage: (state, {
            payload: payload,
        }: PayloadAction<Message>) => {
            if (payload.messageType === 'private') {
                const dmKey = `dm-${payload.senderId}-${payload.recipientId}`;
                if (state.has(dmKey)) {
                    state.get(dmKey)?.push(payload);
                } else {
                    state.set(dmKey, [payload]);
                }
            } else {
                const groupKey = `group-${payload.departmentId}`;
                if (state.has(groupKey)) {
                    state.get(groupKey)?.push(payload);
                } else {
                    state.set(groupKey, [payload]);
                }
            }
        },
        updateMessage: (state, {
            payload: payload,
        }: PayloadAction<{key: string, value: Message}>) => {
            if (state.has(payload.key)) {
                const index = state.get(payload.key)?.findIndex((msg) => msg.id === payload.value.id);
                if (index) {
                    state.get(payload.key)?.splice(index, 1, payload.value);
                }
            }
        },
        deleteMessage: (state, {
            payload: payload,
        }: PayloadAction<{key: string, value: Message}>) => {
            if (state.has(payload.key)) {
                const index = state.get(payload.key)?.findIndex((msg) => msg.id === payload.value.id);
                if (index) {
                    state.get(payload.key)?.splice(index, 1);
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

export const selectMessagesByKey = (state: RootState, key: string) => state.messages.get(key) || [];

// export const selectMessagesByUserID = (state: RootState, userID: CurrentUser['id']) => state.messages.filter((msg) => msg.senderId === userID || msg.recipientId === userID);
