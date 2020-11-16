/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DMListScreen} from '../containers/DataScreens/DMListScreen';
import {EntityType} from '../core/types';
import {DMDetailsScreen} from '../containers/DataScreens/DMDetailsScreen';
import {useSelector} from 'react-redux';
import {appSelector} from '../store/app';
import {useNavigation} from '@react-navigation/native';

export interface ExtraScreenProps {
  name: string;
  component: () => React.ReactElement;
  title: string;
}

export function createEntityStack(
  entityType: EntityType,
  extraScreens?: Array<ExtraScreenProps>,
): () => React.ReactElement {
  const Stack = createStackNavigator();
  return () => {
    const app = useSelector(appSelector);
    const screen = app.screen as EntityType;
    const navigation = useNavigation();

    useEffect(() => {
      if (screen) {
        const stackName = app.entitiesMap[screen].name;
        if (stackName === undefined) return;
        console.log('Navigate to', screen);
        navigation.navigate(stackName, {
          screen: `${screen}DetailsScreen`,
          params: {
            id: '0',
          },
        });
      }
    }, [screen]);

    const extraScreenRendered = (extraScreens || []).map((es) => (
      <Stack.Screen
        name={es.name}
        component={es.component}
        options={{
          title: es.title,
        }}
      />
    ));

    const detailsScreens = app.entities.map(e =>   <Stack.Screen
        name={`${e.type}DetailsScreen`}
        component={() => <DMDetailsScreen type={e.type} />}
        options={{
            title: `${e.name}`,
        }}
    />)

    return (
      <Stack.Navigator>
        <Stack.Screen
          name={`${entityType}sListScreen`}
          component={() => <DMListScreen type={entityType} />}
          options={{
            header: () => null,
          }}
        />
          {detailsScreens}
        {extraScreenRendered}
      </Stack.Navigator>
    );
  };
}
