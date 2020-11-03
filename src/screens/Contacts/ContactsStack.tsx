/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DMListScreen} from '../../containers/DataScreens/DMListScreen';
import {EntityType} from '../../core/types';
import {DMDetailsScreen} from '../../containers/DataScreens/DMDetailsScreen';

const Stack = createStackNavigator();

const entityType: EntityType = 'Contact';

export function ContactsStack(): React.ReactElement {
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
      />
    </Stack.Navigator>
  );
}
