/*
 * Copyright (c) 2020, Mikael Lazarev
 */
/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EntityType} from "../../core/types";
import {DMListScreen} from "../../containers/DataScreens/DMListScreen";
import {DMDetailsScreen} from "../../containers/DataScreens/DMDetailsScreen";


const entityType : EntityType = 'Project';

const Stack = createStackNavigator();


export function ProjectsStack(): React.ReactElement {
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
