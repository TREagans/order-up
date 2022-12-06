import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../global/styles';
import Icon from './Icon';

const FoodCard = ({
  onPressFoodCard,
  businessName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReviews,
  businessAddress,
  howFarAway,
  averageReview,
  images,
  screenWidth,
}) => {
  return (
    <TouchableOpacity>
      <View style={{...styles.cardView, width: screenWidth}}>
        <Image style={{...styles.image, width: screenWidth}} source={images} />

        <View>
          <View>
            <Text style={styles.businessName}>{businessName}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row', marginBottom: 5}}>
            <View style={styles.distance}>
              <Icon
                name="location-sharp"
                type="Ionicons"
                size={18}
                color={colors.grey1}
                style={{marginTop: 3}}
              />
              <Text style={styles.miles}>{howFarAway} mi.</Text>
            </View>
            <View style={{flex: 9, flexDirection: 'row'}}>
              <Text style={styles.address}>{businessAddress}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.rating}>
        <Text style={styles.avgReview}>{averageReview}</Text>
        <Text style={styles.numReviews}>{numberOfReviews} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },
  businessName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.grey1,
    marginTop: 8,
    paddingLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: 'row',
    borderRightColor: colors.grey4,
    paddingHorizontal: 8,
    borderRightWidth: 1,
  },
  miles: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
    marginLeft: 5
  },
  address: {
    fontSize: 12,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    paddingTop: 5,
    color: colors.grey3,
    marginLeft: 10,
  },
  rating: {
    position: 'absolute',
    top: 0,
    right: 10,
    backgroundColor: 'rgba(50, 50, 50, 0.6)',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  avgReview: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3,
  },
  numReviews: {
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
});

export default FoodCard;
