/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {CONTACTS_PREFIX, ENTITY_TYPE} from './';
import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {RootState} from '../index';
import {DETAIL_SUCCESS, LIST_SUCCESS, updateStatus} from 'redux-data-connect';
import {ContactDataManager} from '../../entities/contactEntity';

export function getList(
  opHash: string,
): ThunkAction<void, RootState, unknown, Action<string>> {
  return (dispatch, getState) => {
    const app = getState().app;
    const entity = app.entitiesMap[ENTITY_TYPE];

    if (!entity.isDeployed) {
      dispatch({
        type: CONTACTS_PREFIX + LIST_SUCCESS,
        payload: ContactDataManager.getSampleListData(entity.dataMapper),
      });
      dispatch(updateStatus(opHash, 'STATUS.SUCCESS'));

      return;
    }

    throw new Error('Taking real data is not developed yet!');
  };
}

export function getDetails(
  id: string,
  opHash: string,
): ThunkAction<void, RootState, unknown, Action<string>> {
  return (dispatch, getState) => {
    const app = getState().app;
    const entity = app.entitiesMap[ENTITY_TYPE];

    if (!entity.isDeployed) {
      dispatch({
        type: CONTACTS_PREFIX + DETAIL_SUCCESS,
        payload: ContactDataManager.getSampleDetailsData(entity.dataMapper, id),
      });
      dispatch(updateStatus(opHash, 'STATUS.SUCCESS'));

      return;
    }

    throw new Error('Taking real data is not developed yet!');
  };
}
