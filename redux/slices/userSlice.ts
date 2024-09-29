import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "../types";

const initialState: userState = {
  user: null,
  userPartial: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem("token");
      state.user = null;
    },
    setUserPartial: (state, action: PayloadAction<any>) => {
      state.userPartial = action.payload;
    },
    setTags: (state, action: PayloadAction<any>) => {
      state.user.data.tags = action.payload;
    },
    setNoOfContacts: (state, action: PayloadAction<any>) => {
      state.user.data.totalNoOfContacts = action.payload;
    },
  },
});

export const { setUser, logoutUser, setUserPartial, setTags, setNoOfContacts } =
  userSlice.actions;
export default userSlice.reducer;
