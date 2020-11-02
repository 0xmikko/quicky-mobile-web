/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {Profile} from '../../core/profile';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactsListScreen} from './ContactsListScreen';

const Stack = createStackNavigator();

export type SettingsStackParamList = {
  ChangeNameScreen: {data: Profile};
};

export function ContactsStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContactsListScreen"
        component={ContactsListScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
