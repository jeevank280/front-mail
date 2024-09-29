"use client";

import * as React from "react";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

export interface ProviderProps {
  children: React.ReactNode;
}

export function ProviderR({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
