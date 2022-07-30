import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { featuresApi } from '../../services/features';

interface TaskSlice {
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

const initialState: TaskSlice = {
  menus: [],
};

export const themeSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      featuresApi.endpoints.getFeatures.matchFulfilled,
      (state, action) => {
        state.menus = action.payload.menus;
      }
    );
  },
});

//export const { changeTheme } = themeSlice.actions;

export const theme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
