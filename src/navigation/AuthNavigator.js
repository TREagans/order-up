import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import AuthHomeScreen from '../screens/auth/AuthHomeScreen';
import SigninScreen from '../screens/auth/SigninScreen';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';
import MapScreen from '../screens/MapScreen';

// creating an instance of native stack navigator
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthHome"
        component={AuthHomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
