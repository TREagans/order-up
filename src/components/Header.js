import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors, params} from '../global/styles';
import Icon from './Icon';

const Header = ({title, name, type, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <Icon
          type={type}
          name={name}
          size={28}
          color={colors.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* {rightIcon && rightType && (
        <View style={styles.iconRight}>
          <Icon
            type={rightType}
            name={rightIcon}
            size={24}
            color={colors.white}
          />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    height: params.headerHeight,
    alignItems: 'center',
  },
  // header2: {
  //   backgroundColor: colors.primary,
  //   flexDirection: 'row',
  //   height: params.headerHeight,
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  icon: {
    marginLeft: 20,
  },
  // iconRight: {
  //   marginRight: 25,
  // },
  // titleContainer: {
  //   marginLeft: 80,
  // },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 2,
    marginLeft: 30,
  },
  // headerTitle2: {
  //   color: colors.white,
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   padding: 2,
  // },
  headerTitleRightIcon: {
    justifyContent: 'center',
  },
});

export default Header;
