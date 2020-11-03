/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {DataDetailsView} from 'rn-mobile-components/lib/DataDetailsView';
import {AppDataManager} from '../../core/dataManager';
import {DMDataScreenProps} from './types';

export function DMDetailsScreen({type}: DMDataScreenProps): React.ReactElement {
  const dispatch = useDispatch();

  const route = useRoute() as {params: {id: string}};
  const {id} = route.params;

  const dataManager = AppDataManager.getManager(type);
  const data = useSelector(dataManager.getDetailsSelector(id));

  const getDetails = (opHash: string) => {
    dispatch(dataManager.getDetailsAction(id, opHash));
  };

  return (
    <DataDetailsView
      data={data}
      getDetails={getDetails}
      renderItem={dataManager.getDetailsViewComponent()}
    />
  );
}
