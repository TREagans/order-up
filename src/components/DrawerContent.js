import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Button, Switch} from '@rneui/themed';

import Icon from './Icon';
import {colors} from '../global/styles';

const DrawerContent = props => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: colors.primary,
            paddingTop: 0,
            marginTop: 0,
          }}>
          <View style={styles.profile}>
            <Avatar
              avatarStyle={styles.avatar}
              rounded
              size={75}
              source={{
                uri: 'https://images.pexels.com/photos/5876516/pexels-photo-5876516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <View style={{marginLeft: 20}}>
              <Text style={styles.name}>Darren Jackson</Text>
              <Text style={styles.email}>my_email@example.com</Text>
            </View>
          </View>

          <View style={styles.stats}>
            <View style={styles.favs}>
              <Text
                style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>
                3
              </Text>
              <Text style={{color: colors.white}}>Favorites</Text>
            </View>
            <View style={styles.cart}>
              <Text
                style={{color: colors.white, fontWeight: 'bold', fontSize: 18}}>
                0
              </Text>
              <Text style={{color: colors.white}}>Shopping Cart</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({color, size}) => (
            <Icon
              type="MaterialIcon"
              name="payment"
              color={colors.grey3}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Promotions"
          icon={({color, size}) => (
            <Icon
              type="FontAwesome"
              name="tags"
              color={colors.grey3}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Settings"
          icon={({color, size}) => (
            <Icon
              type="FontAwesome5"
              name="cog"
              color={colors.grey3}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Help"
          icon={({color, size}) => (
            <Icon
              type="FontAwesome"
              name="life-buoy"
              color={colors.grey3}
              size={size}
            />
          )}
        />

        <View>
          <Text style={styles.preferences}>Preferences</Text>
        </View>

        <View style={styles.themeContainer}>
          <Text style={{fontSize: 18, fontWeight: '800'}}>Dark Theme</Text>
          <Switch
            color={colors.primary}
            value={checked}
            onValueChange={value => setChecked(value)}
          />
        </View>
      </DrawerContentScrollView>

      <View>
        <DrawerItem
          label={({focused, color}) => (
            <Text style={{color, fontSize: 18, fontWeight: '500'}}>
              Sign Out
            </Text>
          )}
          icon={({color, size}) => (
            <Icon
              type="MaterialCommunity"
              name="logout"
              color={colors.grey3}
              size={size}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    borderWidth: 3,
    borderColor: colors.white,
  },
  name: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: colors.white,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginBottom: 10,
  },
  favs: {
    alignItems: 'center',
    color: colors.white,
  },
  cart: {
    alignItems: 'center',
  },
  preferences: {
    paddingLeft: 20,
    fontSize: 18,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.grey5,
    paddingTop: 10,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutContainer: {
    marginTop: '10%',
  },
});

export default DrawerContent;
