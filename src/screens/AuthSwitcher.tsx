/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WelcomeStack } from "./Welcome/WelcomeStack";

import actions, { actionsAfterAuth } from "../store/actions";
import {
  authSelector,
  isAuthenticatedSelector,
  operationSelector,
} from "redux-data-connect";
import { LoadingView } from "rn-mobile-components";
import { WebRouter } from "./WebRouter";
import queryString from "query-string";

export interface QueryParams {
  token?: string;
}

export const AuthSwitcher: React.FC = () => {
  const parsed: QueryParams = queryString.parse(window.location.search);

  const [hash, setHash] = useState("0");
  console.log("APP:::", parsed.token);

  const { status } = useSelector(authSelector);
  const isUserAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (status) {
      case "AUTH_STARTUP":
        const newHash = Date.now().toString();
        if (parsed?.token !== undefined) {
          dispatch(actions.auth.loginWithToken(parsed.token, newHash));
          setHash(newHash);
        }
        //   const domain = isDev ? '.qba.digital' : '';
        //   Analytics.init(BACKEND_ADDR, domain);
        break;
      case "AUTH_SUCCESS":
        dispatch(actionsAfterAuth());
        break;
    }
  }, [status]);

  const operation = useSelector(operationSelector(hash));

  switch (status) {
    default:
    case "AUTH_STARTUP":
      return <LoadingView />;
    case "AUTH_REQUIRED":
    case "AUTH_SUCCESS":
      if (!isUserAuthenticated) {
        return <WelcomeStack />;
      }

      if (operation?.status === "STATUS.SUCCESS") {
        return <WebRouter />;
        // return Platform.OS === 'web' ? <WebRouter /> : <Router />;
      }

      return <LoadingView />;
  }
};
