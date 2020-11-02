/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {combineReducers} from 'redux';
import {authReducer, operationReducer} from 'redux-data-connect';
import app from './app/reducer';
import chats from './chats/reducer';
import contacts from './contacts/reducer';
import profile from './profile/reducer';
import projects from './projects/reducer';

export default combineReducers({
  auth: authReducer,
  app,
  chats,
  contacts,
  profile,
  projects,
  operations: operationReducer,
});
