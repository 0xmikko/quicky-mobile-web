/*
 * Copyright (c) 2020, Mikael Lazarev
 */

/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {DataListView} from 'rn-mobile-components/lib/DataListView';
import {AppDataManager} from '../../core/dataManager';
import {appSelector} from '../../store/app';

export interface ContactProjectsWidgetProps {
  id: string;
}

export function ContactProjectsWidget(): React.ReactElement {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const dataManager = AppDataManager.getManager('Project');
  const data = useSelector(dataManager.getListSelector());
  const app = useSelector(appSelector);

  const getList = (opHash: string) => {
    dispatch(dataManager.getListAction(opHash));
  };

  const onSelect = async (id: string) => {
    navigation.navigate(`ProjectDetailsScreen`, {id});
  };

  return (
    <DataListView
      data={data || []}
      getList={getList}
      renderItem={dataManager.getListItemComponent()}
      onSelect={onSelect}
    />
  );
}
