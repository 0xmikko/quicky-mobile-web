/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {namespace} from '../profile';
import {SocketEmitAction, SocketOnAction} from '../socketMiddleware';
import {App} from '../../core/app';
import {TabBarItem} from '../../components/TabBar';
import {stacks} from '../../core/stacks';
import {AppEntity} from '../../core/appEntity';
import {AppActions} from './index';

export const connectSocket = (): ThunkAction<
  void,
  RootState,
  unknown,
  SocketOnAction
> => async (dispatch) => {
  dispatch({
    type: 'SOCKET_ON',
    namespace,
    handler: updateApp,
    event: 'app:updateDetails',
    typeOnSuccess: 'APP_DETAILS',
  });
  dispatch({
    type: 'SOCKET_ON',
    namespace,
    event: 'app:switchToScreen',
    typeOnSuccess: 'APP_SCREEN',
  });
};

export const getDetails: (opHash: string) => SocketEmitAction = (opHash) => ({
  type: 'SOCKET_EMIT',
  namespace,
  event: 'app:retrieve',
  typeOnFailure: 'APP_DETAILS_FAILURE',
  payload: {},
  opHash,
});

export const updateApp: (
  app: App,
) => ThunkAction<void, RootState, unknown, AppActions> = (app: App) => async (
  dispatch,
) => {
  const sortedEntities = app.entities.sort((a, b) =>
    a.order > b.order ? 1 : -1,
  );

  const entitiesMap: Record<string, AppEntity> = {};

  const tabs: Array<TabBarItem> = [];
  for (let e of sortedEntities) {
    const stackComponent = stacks[e.type];
    if (stackComponent === undefined) {
      dispatch({
        type: 'APP_DETAILS_FAILURE',
        error: `Unknown stack component${e.type}`,
      });
      return;
    }
    entitiesMap[e.type] = e;
    tabs.push({
      name: e.name,
      icon: e.icon,
      component: stackComponent,
    });
  }

  dispatch({
    type: 'APP_DETAILS',
    payload: {
      app,
      entitiesMap,
      tabs,
    },
  });
};
