import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';

import {colors, params} from '../../global/styles';

const AuthHomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.title}>IN YOUR AREA</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Swiper
          showsButtons={true}
          autoplay={true}
          dotColor={colors.white}
          activeDotColor={colors.primary}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          <View style={styles.slide1}>
            <Image source={require('../../assets/steak-dinner.jpg')} style={styles.slideImg} />
          </View>

          <View style={styles.slide2}>
            <Image source={require('../../assets/tacos.jpg')} style={styles.slideImg} />
          </View>

          <View style={styles.slide3}>
            <Image source={require('../../assets/hamburger.jpg')} style={styles.slideImg} />
          </View>

          <View style={styles.slide4}>
            <Image source={require('../../assets/wings.jpg')} style={styles.slideImg} />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 2, marginTop: 30}}>
        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            style={params.styledButton}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={params.styledTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: 20}}>
          <TouchableOpacity
            style={{...params.styledButtonOutline, marginTop: 20}}>
            <Text style={{...params.styledTitle, color: colors.primary}}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  sliderContainer: {
    flex: 3,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 60
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide4: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slideImg: {
    height: '100%',
    width: '100%',
  },
});

export default AuthHomeScreen;
