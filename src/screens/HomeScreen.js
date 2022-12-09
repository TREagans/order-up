import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CountDown from 'react-native-countdown-component';

import Header from '../components/Header';
import Icon from '../components/Icon';
import MainHeader from '../components/MainHeader';
import {colors, params} from '../global/styles';
import {filterData, restaurantsData} from '../global/data';
import RestaurantCard from '../components/RestaurantCard';

const HomeScreen = ({navigation}) => {
  const [delivery, setDelivery] = useState(false);
  const [indexCheck, setIndexCheck] = useState('0');
  const [showClock, setShowClock] = useState(true);

  // getting device screen width using Dimensions.get('window')
  const SCREEN_WIDTH = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <MainHeader
        leftIcon="menu"
        leftType="MaterialCommunity"
        rightIcon="shopping-cart"
        rightType="Entypo"
        color={colors.white}
        size={26}
        title="Order Up"
        badgeCount={12}
        navigation={navigation}
      />

      {/* with scrollview we want to identify a header, so we'll */}
      {/* use the delivery buttons as a header making them sticky */}
      <ScrollView
        stickyHeaderIndices={[0]}
        showsHorizontalScrollIndicator={true}
        nestedScrollEnabled={true}>
        {/* listed as the first (0) View for the scrollview */}
        <View style={{backgroundColor: colors.white}}>
          {/* delivery type buttons */}
          <View style={styles.deliveryType}>
            <TouchableOpacity onPress={() => setDelivery(true)}>
              <Text
                style={{
                  ...params.activeType,
                  backgroundColor: delivery ? colors.primary : colors.grey5,
                }}>
                Delivery
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
                navigation.navigate('MapScreen');
              }}>
              <Text
                style={{
                  ...params.activeType,
                  backgroundColor: delivery ? colors.grey5 : colors.primary,
                }}>
                Pick-up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.address}>
            <View style={styles.location}>
              <Icon
                name="location-sharp"
                type="Ionicons"
                size={28}
                color={colors.grey1}
              />
              <Text style={styles.streetAddress}>3849 Carver Ln</Text>
            </View>

            <View style={styles.deliveryTime}>
              <Icon
                name="time"
                type="Ionicons"
                size={28}
                color={colors.grey1}
              />
              <Text style={{fontSize: 16, marginLeft: 5, fontWeight: '400'}}>
                Now
              </Text>
            </View>
          </View>

          <View style={styles.options}>
            <Icon name="tune" type="MaterialCommunity" size={34} />
          </View>
        </View>

        {/* categories section title */}
        <View>
          <Text style={params.sectionTitle}>Categories</Text>
        </View>

        {/* flatlist with category food cards */}
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View
                  style={
                    indexCheck === item.id
                      ? {...styles.categoryCardSelected}
                      : {...styles.categoryCard}
                  }>
                  <Image style={styles.categoryImage} source={item.image} />
                  <Text
                    style={{
                      ...styles.categoryTitle,
                      color:
                        indexCheck === item.id ? colors.white : colors.grey2,
                    }}>
                    {item.name}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        {/* free delivery section title */}
        <View>
          <Text style={params.sectionTitle}>Free Delivery: Limited Time</Text>
        </View>

        {showClock ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 5,
            }}>
            <Text style={{fontWeight: 'bold'}}>Free delivery expires: </Text>
            <CountDown
              until={8400}
              size={20}
              onFinish={() => alert('Free delivery has ended!')}
              digitStyle={{backgroundColor: colors.red, height: 40, width: 35}}
              digitTxtStyle={{color: colors.white}}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{h: 'Hr', m: 'Min', s: 'Sec'}}
            />
          </View>
        ) : null}

        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <RestaurantCard
                  businessName={item.restaurantName}
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReview}
                  howFarAway={item.farAway}
                  businessAddress={item.businessAddress}
                />
              </View>
            )}
          />
        </View>

        {/* promote here */}
        <View>
          <Text style={params.sectionTitle}>Promote Your Business</Text>
        </View>

        {/* restaurants being promoted */}
        <View>
          <FlatList
            style={{marginTop: 10, marginBottom: 10}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={{marginRight: 5}}>
                <RestaurantCard
                  businessName={item.restaurantName}
                  screenWidth={SCREEN_WIDTH * 0.8}
                  images={item.images}
                  averageReview={item.averageReview}
                  numberOfReviews={item.numberOfReview}
                  howFarAway={item.farAway}
                  businessAddress={item.businessAddress}
                />
              </View>
            )}
          />
        </View>

        {/* restaurants in your area */}
        <View>
          <Text style={params.sectionTitle}>Restaurants In Your Area</Text>
        </View>

        {/* map thru restaurants in your area */}
        {restaurantsData.map(restaurant => {
          return (
            <View style={{marginTop: 10, marginBottom: 12}} key={restaurant.id}>
              <RestaurantCard
                screenWidth={SCREEN_WIDTH * 0.95}
                businessName={restaurant.restaurantName}
                images={restaurant.images}
                averageReview={restaurant.averageReview}
                numberOfReviews={restaurant.numberOfReview}
                howFarAway={restaurant.farAway}
                businessAddress={restaurant.businessAddress}
              />
            </View>
          );
        })}
      </ScrollView>

      {delivery &&
        // floating action button
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
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryType: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    paddingBottom: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  address: {
    backgroundColor: colors.grey4,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streetAddress: {
    fontSize: 16,
    marginRight: 20,
  },
  deliveryTime: {
    backgroundColor: colors.white,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  options: {
    marginRight: 20,
  },
  categoryCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  categoryCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  categoryImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 4,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: '500',
  },
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

export default HomeScreen;
