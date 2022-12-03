import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {colors} from '../global/styles';

const AppInput = props => {
  return (
    <View>
      <View>
        <TextInput type={props.type} style={props.style} placeholder={props.placeholder} />
      </View>
    </View>
  );
};

export default AppInput;
