import React from 'react';
import style from './style';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';

const CommonHeader = () => {
  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View style={responsiveStyle.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../../assets/images/drawer.png')}
          style={responsiveStyle.sideIcon}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/images/StylishNova-new-logo.png')}
        style={responsiveStyle.logo}
      />
    </View>
  );
};

export default CommonHeader;
