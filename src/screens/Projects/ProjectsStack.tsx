/*
 * Copyright (c) 2020, Mikael Lazarev
 */
/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {Profile} from '../../core/profile';
import {createStackNavigator} from '@react-navigation/stack';
import {ProjectsListScreen} from './ProjectsListScreen';
import {ProjectDetailsScreen} from './ProjectDetailsScreen';

const Stack = createStackNavigator();

export type ProjectsStackParamList = {
  ProjectDetailsScreen: {id: string};
};

export function ProjectsStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsListScreen"
        component={ProjectsListScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ProjectDetailsScreen"
        component={ProjectDetailsScreen}
      />
    </Stack.Navigator>
  );
}
