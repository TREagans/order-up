import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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
    case 'FontAwesome5':
      return FontAwesome5;
      break;
    case 'Entypo':
      return Entypo;
      break;
    case 'MaterialIcon':
      return MaterialIcon;
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
