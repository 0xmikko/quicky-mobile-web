/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import "reflect-metadata";
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createApiMiddleware, getFullUrl} from 'redux-data-connect';
import createSocketMiddleware from './socketMiddleware';
import {SSO_ADDR} from '../config';
import {Platform} from 'react-native';

export type RootState = ReturnType<typeof reducer>;

const isDev =
  Platform.OS === 'web' ? process.env.NODE_ENV === 'development' : __DEV__;

const composeEnhancers: typeof compose = isDev
  ? composeWithDevTools({})
  : compose;

const apiMiddleware = createApiMiddleware(
  getFullUrl('/auth/token/refresh/', {host: SSO_ADDR}),
);

export default function configureStore() {
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(thunk, createSocketMiddleware, apiMiddleware),
    ),
  );
}
