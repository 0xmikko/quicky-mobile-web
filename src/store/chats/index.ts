/*
 * Copyright (c) 2020, Mikael Lazarev
 */
import {RootState} from '../index';

export const CHATS_PREFIX = 'CHATS@@';
export const endpoint = '/api/chats/';

export const chatDetailsDataSelector = () => (state: RootState) =>
  Object.values(state.chats.Details.data)[0]?.data;
