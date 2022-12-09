import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Badge} from '@rneui/themed';

import {colors, params} from '../global/styles';
import Icon from './Icon';

const MainHeader = ({leftIcon, rightIcon, ...props}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftIcon}>
        <Icon
          name={leftIcon}
          type={props.leftType}
          color={props.color}
          size={32}
          onPress={() => props.navigation.toggleDrawer()}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={{...styles.leftIcon, ...styles.rightIcon}}>
        <Icon
          name={rightIcon}
          type={props.rightType}
          color={props.color}
          size={props.size}
        />

        {/* adding a badge to our icon */}
        <Badge
          status="error"
          value={props.badgeCount || 0}
          containerStyle={{position: 'absolute', top: 7, left: 15}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: params.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 25,
    letterSpacing: 0.3,
    fontWeight: 'bold',
  },
  leftIcon: {
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    marginRight: 25,
  },
});

export default MainHeader;
