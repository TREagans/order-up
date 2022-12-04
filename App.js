import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Header from './src/components/Header';
import SigninScreen from './src/screens/auth/SigninScreen';
import {colors} from './src/global/styles';
import AuthHomeScreen from './src/screens/auth/AuthHomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={colors.primary} 
      />
      {/* <SigninScreen /> */}
      <AuthHomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
