import React, {useState, useRef} from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AppInput from '../../components/AppInput';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../components/Header';
import {appInput, colors, params, screens} from '../../global/styles';

const SigninScreen = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  // useRef will help us reference which textInput we're referring to
  // We can get the current state of the textInput using textInput.current
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);

  return (
    <View>
      <Header title="MY ACCOUNT" icon="arrowleft" navigation={navigation} />
      <View>
        <Text style={screens.title}>Sign In</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.descText}>Please enter the email and password</Text>
        <Text style={styles.descText}>registered with your account</Text>
      </View>

      <View>
        <View style={{...styles.textInput, ...styles.textInput2}}>
          <MCIIcon name="email" size={18} color={colors.grey4} />

          {/* ref allow us to refer to this TextInput as textInput1 */}
          <TextInput
            ref={textInput1}
            style={styles.inputTextPosition}
            placeholder="Email"
          />
        </View>

        <View style={styles.textInput2}>
          <FontistoIcon
            name="locked"
            style={{marginLeft: 3}}
            size={16}
            color={colors.grey4}
          />

          {/* ref allow us to refer to this TextInput as textInput2 */}
          <TextInput
            ref={textInput2}
            style={styles.inputTextPosition}
            placeholder="Password"
          />

          {showPassword ? (
            <IoniconIcon
              name="eye-off"
              size={22}
              color={colors.grey4}
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <IoniconIcon
              name="eye"
              size={22}
              color={colors.grey4}
              onPress={() => setShowPassword(!showPassword)}
            />
          )}
        </View>

        <TouchableOpacity style={styles.forgotPassContainer}>
          <Text style={{textDecorationLine: 'underline'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity style={params.styledButton}>
          <Text style={params.styledTitle}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>OR</Text>

      <TouchableOpacity style={params.buttonWithIcon}>
        <FontistoIcon name="facebook" size={18} color={colors.white} />
        <Text style={params.buttonWithIconText}>Sign In With Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{...params.buttonWithIcon, backgroundColor: colors.googleRed}}>
        <FontistoIcon name="google" size={18} color={colors.white} />
        <Text style={params.buttonWithIconText}>Sign In With Google</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.noAccount}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  descText: {
    color: colors.grey3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.grey4,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: colors.grey4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  inputTextPosition: {
    flex: 1,
    marginLeft: 10,
  },
  forgotPassContainer: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 5,
  },
  forgotPass: {
    textDecorationLine: 'underline',
  },
  or: {
    textAlign: 'center',
    color: colors.grey1,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signup: {
    textDecorationLine: 'underline',
    marginLeft: 4,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  noAccount: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
});

export default SigninScreen;
