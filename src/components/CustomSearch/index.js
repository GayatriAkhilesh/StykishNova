import React from 'react';
import style from './style';
import {Image, Text, TextInput, View} from 'react-native';
import {useDimensionContext} from '../../context';

const CustomSearch = props => {
  const {filter, placeholder, mike = true, onChangeText = {}} = {...props};
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
            placeholder={
              placeholder ? placeholder : 'Find your needs here . . .'
            }
            placeholderTextColor={'#48301f'}
            style={responsiveStyle.textInput}
            selectionColor={'#48301f'}
            onChangeText={text => onChangeText(text)}
          />
          {mike ? (
          <Image
            source={require('../../assets/images/mic-home.png')}
            style={responsiveStyle.searchIcon}
          />
        ) : null}
        </View>
        
      </View>
      {filter ? <Text style={responsiveStyle.filter}>Filter</Text> : null}
    </View>
  );
};

export default CustomSearch;
