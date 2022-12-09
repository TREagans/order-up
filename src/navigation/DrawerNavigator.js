import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';

import MainTabNavigator from '../navigation/MainTabNavigator';
import Icon from '../components/Icon';
import {colors} from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsole.Screen';
import DriverConsoleScreen from '../screens/DriverConsoleScreen';
import PaymentScreen from '../screens/paymentScreen';
import DrawerContent from '../components/DrawerContent';

// create an instance of drawer navigator
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          // width: 240,
          headerShown: false,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Clients"
        component={MainTabNavigator}
        options={{
          drawerLabel: 'Client',
          drawerIcon: ({focused, size}) => (
            <Icon
              type="Ionicons"
              name="home"
              color={focused ? colors.primary : colors.grey3}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Business Console"
        component={BusinessConsoleScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              type="Ionicons"
              name="business-sharp"
              color={focused ? colors.primary : colors.grey3}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      
      {/* <Drawer.Screen
        name="Driver Console"
        component={DriverConsoleScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              type="FontAwesome5"
              name="car"
              color={focused ? colors.primary : colors.grey3}
              size={size}
            />
          ),
          headerShown: false,
        }}
      /> */}
      {/* <Drawer.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              type="Ionicons"
              name="home"
              color={focused ? colors.primary : colors.grey3}
              size={size}
            />
          ),
          headerShown: false,
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
