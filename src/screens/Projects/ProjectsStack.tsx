/*
 * Copyright (c) 2020, Mikael Lazarev
 */
/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EntityType} from '../../core/types';
import {DMListScreen} from '../../containers/DataScreens/DMListScreen';
import {DMDetailsScreen} from '../../containers/DataScreens/DMDetailsScreen';
import {useSelector} from 'react-redux';
import {appSelector} from '../../store/app';
import {useNavigation} from '@react-navigation/native';

const entityType: EntityType = 'Project';

const Stack = createStackNavigator();

export function ProjectsStack(): React.ReactElement {
  const app = useSelector(appSelector);
  const screen = app.screen;
  const navigation = useNavigation();

  // useEffect(() => {
  //   if (screen) {
  //     navigation.navigate(`${screen}sStack`, {
  //       screen: `${screen}DetailsScreen`,
  //       id: '0',
  //     });
  //   }
  // }, [screen]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={`${entityType}sListScreen`}
        component={() => <DMListScreen type={entityType} />}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name={`${entityType}DetailsScreen`}
        component={() => <DMDetailsScreen type={entityType} />}
        options={{
          title: `${entityType}s`,
        }}
      />
    </Stack.Navigator>
  );
}
