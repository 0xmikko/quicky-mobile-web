/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {RootState} from '../index';
import axios from 'axios';

export async function getTableRecords(api: string, getState: () => RootState) {
  const app = getState().app;
  const hostname = app.qbHostName;
  const token = getState().profile.qbToken;

  const rawData = await axios.get(`https://api.quickbase.com/v1${api}`, {
    headers: {
      'QB-Realm-Hostname': hostname,
      Authorization: `QB-USER-TOKEN ${token}`,
    },
  });

  return rawData.data;
}
