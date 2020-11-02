/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import { RootState } from "../index";
import { App } from "../../core/app";

export const appSelector = (state: RootState) => state.app;

export type AppActions = {
  type: "APP_DETAILS";
  payload: App;
};
