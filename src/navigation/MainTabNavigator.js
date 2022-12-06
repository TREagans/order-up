import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountScreen from '../screens/AccountScreen';
import Icon from '../components/Icon';
import {colors} from '../global/styles';

// create an instance of bottom tab navigator
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerTitle: '', tabBarActiveTintColor: colors.primary}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon type="Ionicons" name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon type="Ionicons" name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="OrdersScreen" 
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <Icon type="Ionicons" name="receipt-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="AccountScreen" 
        component={AccountScreen} 
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon type="FontAwesome" name="user-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
