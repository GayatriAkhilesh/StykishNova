import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import style from './style';

const CustomButton = props => {
  const {type, handleButtonPress, buttonText, icon} = props;
  return (
    <TouchableOpacity
      onPress={handleButtonPress}
      style={[
        style.button,
        {
          backgroundColor: type === 'primary' ? '#48301f' : '#c6ab80',
        },
      ]}>
      {type !== 'primary' ? <Image source={icon} style={style.icon} /> : null}
      <Text
        style={[
          style.buttonText,
          {
            color: type === 'primary' ? 'white' : '#070504',
            fontFamily:
              type === 'primary' ? 'Poppins-SemiBold' : 'Poppins-Regular',
            fontSize: type === 'primary' ? 18 : 15,
          },
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
