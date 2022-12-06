import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

// determine what font library icon is from
const getIconLibrary = type => {
  switch (type) {
    case 'Ionicons':
      return Ionicons;
      break;
    case 'MaterialCommunity':
      return MaterialCommunity;
      break;
    case 'Fontisto':
      return Fontisto;
      break;
    case 'AntDesign':
      return AntDesign;
      break;
    case 'FontAwesome':
      return FontAwesome;
      break;
    case 'Entypo':
      return Entypo;
      break;
    default:
      break;
  }
};

// get type prop, and then spread all other props
const Icon = ({type, ...props}) => {
  const FontLibrary = getIconLibrary(type);

  // returning a component, and all passed props
  return <FontLibrary {...props} />;
};

export default Icon;