import React from 'react';
import style from './style';
import {Image, Text, TextInput, View} from 'react-native';
import {useDimensionContext} from '../../context';

const CustomSearch = props => {
  const {filter} = {...props};
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  return (
    <View
      style={[
        filter ? responsiveStyle.newContainer : responsiveStyle.container,
      ]}>
      <View
        style={[filter ? responsiveStyle.newStyle : responsiveStyle.search]}>
        <View style={responsiveStyle.innerView}>
          <Image
            source={require('../../assets/images/search-home.png')}
            style={responsiveStyle.searchIcon}
          />
          <TextInput
            placeholder="Find your needs here . . ."
            placeholderTextColor={'#808080'}
            style={responsiveStyle.textInput}
            selectionColor={'#e3256b'}
          />
        </View>
        <Image
          source={require('../../assets/images/mic-home.png')}
          style={responsiveStyle.searchIcon}
        />
      </View>
      {filter ? <Text style={responsiveStyle.filter}>Filter</Text> : null}
    </View>
  );
};

export default CustomSearch;
