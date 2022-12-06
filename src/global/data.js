export const filterData = [
  {name: 'Fast Food', image: require('../assets/fastfood.png'), id: '0'},
  {name: 'Burgers', image: require('../assets/burger.png'), id: '1'},
  {name: 'Salads', image: require('../assets/salads.png'), id: '2'},
  {name: 'Hotdog', image: require('../assets/hotdog.png'), id: '3'},
  {name: 'Chinese', image: require('../assets/chinese.png'), id: '4'},
  {name: 'Mexican', image: require('../assets/mexican.png'), id: '5'},
  {name: 'Sea Food', image: require('../assets/seafood.png'), id: '6'},
];

export const restaurantsData = [
  {
    restaurantName: 'McDonalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../assets/mcdonalds.jpg'),
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps,Milkshakes...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: require('../assets/mcdonalds.jpg'),
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: require('../assets/mcdonalds.jpg'),
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: require('../assets/mcdonalds.jpg'),
      },
    ],
    id: 0,
  },

  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images: require('../assets/kfc.jpg'),
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken,Chicken wings... ',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: require('../assets/kfc.jpg'),
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: require('../assets/kfc.jpg'),
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: require('../assets/kfc.jpg'),
      },
    ],
    id: 1,
  },

  {
    restaurantName: 'Texas Roadhouse',
    farAway: '5',
    businessAddress: ' 17 Olivia Rd, Johannesburg',
    images: require('../assets/tx-roadhouse.jpg'),
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: require('../assets/tx-roadhouse.jpg'),
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: require('../assets/tx-roadhouse.jpg'),
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: require('../assets/tx-roadhouse.jpg'),
      },
    ],
    id: 2,
  },

  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: ' 15 Atlas Rd, Kempton Park',
    images: require('../assets/pizza.jpg'),
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: require('../assets/pizza.jpg'),
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: require('../assets/pizza.jpg'),
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: require('../assets/pizza.jpg'),
      },
    ],
    id: 3,
  },
];