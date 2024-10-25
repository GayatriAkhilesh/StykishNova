import React, { useState } from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import style from './style';

const CustomTextInput = props => {
  const {type, handleText, placeholder, value} = props;
  const [show, setShow] = useState(false);
  const keyboardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : type ==='phone' ? 'phone-pad'
      : 'default';
  const secureTextEntry = type === 'password' ? ( show ? false: true) : false;
  const icon =
    type === 'email'
      ? require('../../assets/images/email.png')
      : type === 'password' ? show ? require('../../assets/images/eye-open.png')
      : require('../../assets/images/hide-eye.png')
      : false;


      const handlePassword = () =>{
        setShow(!show);
      }
  return (
    <View style={style.container}>
      <TextInput   
        style={style.textInput}
        placeholder={placeholder}
        placeholderTextColor={'#48301f'}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        selectionColor={'#da335c'}
        onChangeText={handleText}
        value={value}
      />
      {!icon ? null : (
        <TouchableOpacity onPress={handlePassword} disabled={type !== 'password' ? true : false}>
        <Image
          style={style.icon}
          source={icon}
        />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
