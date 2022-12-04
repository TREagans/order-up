import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Header from './src/components/Header';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={colors.primary} 
      />
      <RootNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
