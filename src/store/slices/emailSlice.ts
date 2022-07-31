import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { emailsApi } from '../../services/emails';

export interface EmailState {
  items: Email[];
}

export interface Email {
  id?: number;
  subMenuItems: subMenu[];
}

export interface subMenu {
  name: string;
  id: number;
  subject: string;
  owner: string;
  users: string[];
}

const initialState: EmailState = {
  items: [],
};

export const emailsSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      emailsApi.endpoints.getEmails.matchFulfilled,
      (state, action: PayloadAction<EmailState>) => {
        state.items = action.payload.items;
      }
    );
  },
});

export const emails = (state: RootState) => state.emails;

export default emailsSlice.reducer;
