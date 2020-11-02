/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {Profile} from '../../core/profile';
import {createStackNavigator} from '@react-navigation/stack';
import {ContactsListScreen} from './ContactsListScreen';
import {ContactDetailsScreen} from './ContactDetailsScreen';

const Stack = createStackNavigator();

export type ContactsStackParamList = {
  ContactDetailsScreen: {id: string};
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
      <Stack.Screen
        name="ContactDetailsScreen"
        component={ContactDetailsScreen}
      />
    </Stack.Navigator>
  );
}
