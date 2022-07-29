import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ThemeState {
  isLightTheme: boolean;
}

const initialState: ThemeState = {
  isLightTheme: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const theme = (state: RootState) => state.theme.isLightTheme;

export default themeSlice.reducer;
