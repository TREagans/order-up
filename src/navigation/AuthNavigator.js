import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import SigninScreen from '../screens/auth/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import DrawerNavigator from './DrawerNavigator';

// creating an instance of native stack navigator
const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="AuthHome"
        component={AuthHomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
