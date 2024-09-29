export interface CounterState {
  value: number;
}

export interface userState {
  user: any;
  userPartial: any;
}

export interface contactsState {
  contacts: any;
}

export interface campaignsState {
  campaigns: any;
  campaign: any;
  sendersList: any;
}

export interface RootState {
  counter: CounterState;
  user: userState;
  contacts: contactsState;
  campaigns: campaignsState;
}
