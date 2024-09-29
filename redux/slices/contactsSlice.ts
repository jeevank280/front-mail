import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactsState } from "../types";

const initialState: contactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<any>) => {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
