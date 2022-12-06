import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../components/Icon';
import { colors } from '../global/styles';

const MapScreen = () => {
  return (
    <View>
      <Text>Map Screen</Text>

      {/* floating action button */}
      <View style={styles.floatingButton}>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
          <Icon
            name="location-sharp"
            type="Ionicons"
            size={32}
            color={colors.primary}
          />
          <Text>Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: colors.white,
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
});
export default MapScreen;
