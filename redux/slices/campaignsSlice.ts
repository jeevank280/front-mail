import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { campaignsState } from "../types";

const initialState: campaignsState = {
  campaigns: [],
  campaign: null,
  sendersList: [],
};

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<any>) => {
      state.campaigns = action.payload;
    },
    setCampaign: (state, action: PayloadAction<any>) => {
      state.campaign = action.payload;
    },
    setSendersList: (state, action: PayloadAction<any>) => {
      state.sendersList = action.payload;
    },
  },
});

export const { setCampaigns, setCampaign, setSendersList } =
  campaignsSlice.actions;
export default campaignsSlice.reducer;
