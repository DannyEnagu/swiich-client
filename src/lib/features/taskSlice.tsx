import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, {
        payload: payload
    }: PayloadAction<Task[]>) => {
        Object.assign(state, payload);
    },
    addTask: (state, {
        payload: payload
    }: PayloadAction<Task>) => {
        state.push(payload);
    },
    removeTask: (state, {
        payload: payload
    }: PayloadAction<Task>) => {
      return state.filter((task) => task.id !== payload.id);
    },
    updateTask: (state, {
        payload: payload
    }: PayloadAction<Task>) => {
      const index = state.findIndex((task) => task.id === payload.id);
      if (index !== -1) {
        state[index] = payload;
      }
    },
  },
});

export const {
  setTask,
  addTask,
  updateTask,
  removeTask
} = taskSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks;

export default taskSlice.reducer;