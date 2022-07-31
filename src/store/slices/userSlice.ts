import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface UserState {
  isAuthenticated: boolean;
  userData: UserInfo;
}

export interface UserInfo {
  name?: string;
  email?: string;
  userId: string;
  avatar?: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  userData: {
    userId: '',
    name: '',
    email: '',
    avatar: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.userData = action.payload;
    },
  },
});

export const { setAuthentication, setUser } = userSlice.actions;

export const authentication = (state: RootState) => state.user.isAuthenticated;

export const userData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
