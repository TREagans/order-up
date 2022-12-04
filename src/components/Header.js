import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';

import {colors, params} from '../global/styles';

const Header = ({title, icon, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>

        <ADIcon
          name={icon}
          size={28}
          color={colors.white}
          onPress={() => navigation.goBack()}
        />

      </View>
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
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
  icon: {
    marginLeft: 20,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 2,
    marginLeft: 30,
  },
});

export default Header;
