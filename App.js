import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Header from './src/components/Header';
import SigninScreen from './src/screens/auth/SigninScreen';
import {colors} from './src/global/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={colors.primary} 
      />
      <SigninScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
