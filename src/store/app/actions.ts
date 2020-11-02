/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { namespace } from "../profile";
import { SocketEmitAction, SocketOnAction } from "../socketMiddleware";

export const connectSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  SocketOnAction
> => async (dispatch) => {
  dispatch({
    type: "SOCKET_ON",
    namespace,
    event: "app:updateDetails",
    typeOnSuccess: "APP_DETAILS",
  });
};

export const getDetails: (opHash: string) => SocketEmitAction = (opHash) => ({
  type: "SOCKET_EMIT",
  namespace,
  event: "app:retrieve",
  typeOnFailure: "APP_DETAILS_FAILURE",
  payload: {},
  opHash,
});
