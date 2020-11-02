/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import { App } from "../../core/app";
import { AppActions } from "./index";

export interface AppState extends App {}

const initialState: AppState = {
  id: "",
  createdAt: Date.now(),
  name: "",
  company: "",

  logoUrl: "",
  // SPLASH SCREEN
  splashTitle: "",
  splashTitleColor: "",
  splashSubtitle: "",
  splashSubtitleColor: "",
  splashBackground: "",

  entities: [],

};

export default function createReducer(
  state: AppState = initialState,
  action: AppActions
): AppState {
  switch (action.type) {
    case "APP_DETAILS":
      return action.payload;
  }

  return state;
}
