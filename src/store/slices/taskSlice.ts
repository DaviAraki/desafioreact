import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { featuresApi } from '../../services/features';

export interface TaskState {
  menus: Tasks[];
}

export interface Tasks {
  id?: number;
  name: string;
  subMenus: subMenu[];
}

export interface subMenu {
  name: string;
  id: number;
}

const initialState: TaskState = {
  menus: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
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

export default taskSlice.reducer;
