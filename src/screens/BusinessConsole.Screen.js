import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BusinessConsoleScreen = () => {
  return (
    <View style={styles.container}>
        <Text>Business Console Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BusinessConsoleScreen;