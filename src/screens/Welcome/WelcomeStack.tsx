/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './SplashScreen';

const Stack = createStackNavigator();

export type WelcomeStackParamList = {
    EnterCodeScreen: {phone: string};
};

export const WelcomeStack: React.FC = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        {/*<Stack.Screen*/}
        {/*    name="PhoneScreen"*/}
        {/*    component={EnterPhoneScreen}*/}
        {/*    options={{*/}
        {/*        headerShown: false,*/}
        {/*    }}*/}
        {/*/>*/}
        {/*<Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} />*/}
      </Stack.Navigator>
    );
};
