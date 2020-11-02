/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {Chat} from '../../core/chat';
import {CHATS_PREFIX} from './';
import {combineReducers} from 'redux';
import {createDataLoaderListReducer} from 'redux-data-connect';
import {createChatDataLoaderDetailsReducer} from './details';

export default combineReducers({
  List: createDataLoaderListReducer<Chat>(CHATS_PREFIX),
  Details: createChatDataLoaderDetailsReducer(),
});
