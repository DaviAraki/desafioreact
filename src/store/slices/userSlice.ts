import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface UserState {
  isAuthenticated: boolean;
}

const initialState: UserState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthentication } = userSlice.actions;

export const authentication = (state: RootState) => state.user.isAuthenticated;

export default userSlice.reducer;
