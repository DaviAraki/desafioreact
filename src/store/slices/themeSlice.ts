import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const theme = (state: RootState) => state.theme;

export default themeSlice.reducer;
