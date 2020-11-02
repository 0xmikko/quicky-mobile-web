/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {Profile} from '../../core/profile';
import {ProfileScreen} from './ProfileScreen';
import {ChangeNameScreen} from './ChangeNameScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export type SettingsStackParamList = {
  ChangeNameScreen: {data: Profile};
};

export function SettingsStack() : React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={ProfileScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ChangeNameScreen"
        component={ChangeNameScreen}
        options={{
          title: 'Changing name',
        }}
      />
    </Stack.Navigator>
  );
};
