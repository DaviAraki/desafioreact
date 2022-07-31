import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { emailsApi } from "../../services/emails";

export interface EmailState {
  items: Email[];
  emailFilter?: string;
  isFiltering: boolean;
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
  isFiltering: false,
};

export const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setEmailFilter: (state, action: PayloadAction<string>) => {
      state.emailFilter = action.payload;
    },
    setIsFiltering: (state) => {
      state.isFiltering = !state.isFiltering;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      emailsApi.endpoints.getEmails.matchFulfilled,
      (state, action: PayloadAction<EmailState>) => {
        state.items = action.payload.items;
      }
    );
  },
});

export const emails = (state: RootState) => state.emails.items;
export const emailFilter = (state: RootState) => state.emails.emailFilter;

export const { setEmailFilter, setIsFiltering } = emailsSlice.actions;

export default emailsSlice.reducer;
