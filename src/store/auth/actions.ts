/*
 * Copyright (c) 2020, Mikael Lazarev
 */
import { AUTH_API } from "../../config";
import { createLogoutAction, createOAuthLoginAction } from "redux-data-connect";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { Action } from "redux";

// Login actions
export const loginWithToken = createOAuthLoginAction(
  AUTH_API.TokenAuthEndpoint
);

const logoutAction = createLogoutAction();

export const logout = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  // Clear local storage at logout

  dispatch(logoutAction());
  dispatch({
    type: "SOCKET_OFF",
  });
};
