import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { featuresApi } from '../../services/tasks';

export interface TaskState {
  menus: Tasks[];
  marked: number[];
}

export interface Tasks {
  id: number;
  name: string;
  subMenus: subMenu[];
}

export interface subMenu {
  name: string;
  id: number;
}

const initialState: TaskState = {
  menus: [],
  marked: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setMarked: (state, action: PayloadAction<number[]>) => {
      state.marked = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      featuresApi.endpoints.getFeatures.matchFulfilled,
      (state, action: PayloadAction<TaskState>) => {
        state.menus = action.payload.menus;
      }
    );
  },
});

export const tasks = (state: RootState) => state.tasks;
export const selectMarked = (state: RootState) => state.tasks.marked;

export const { setMarked } = taskSlice.actions;

export default taskSlice.reducer;
