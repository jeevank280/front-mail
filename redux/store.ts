import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "./types";

import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import contactsReducer from "./slices/contactsSlice";
import campaignsReducer from "./slices/campaignsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    contacts: contactsReducer,
    campaigns: campaignsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type { RootState };
