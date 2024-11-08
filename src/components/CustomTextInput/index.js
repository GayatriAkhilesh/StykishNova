import React, {useState} from 'react';
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';

const CustomTextInput = props => {
  const {
    type,
    handleText,
    placeholder,
    value,
    check = false,
    multiline = false,
  } = props;
  const dimensions = useDimensionContext();
  const [show, setShow] = useState(false);
  const keyboardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : type === 'phone'
      ? 'phone-pad'
      : 'default';
  const secureTextEntry = type === 'password' ? (show ? false : true) : false;
  const icon =
    type === 'email'
      ? require('../../assets/images/email.png')
      : type === 'password'
      ? show
        ? require('../../assets/images/eye-open.png')
        : require('../../assets/images/hide-eye.png')
      : false;

  const handlePassword = () => {
    setShow(!show);
  };
  return (
    <View style={style.container}>
      <TextInput
        style={[
          style.textInput,
          {
            height:
              Platform.OS === 'ios'
                ? multiline
                  ? dimensions.windowHeight * 0.09
                  : dimensions.windowHeight * 0.04
                : multiline
                ? dimensions.windowHeight * 0.20
                : dimensions.windowHeight * 0.06,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={'#48301f'}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        selectionColor={'#48301f'}
        onChangeText={handleText}
        value={value}
        multiline={multiline}
      />
      {check ? <Text style={style.check}>Check</Text> : null}
      {!icon ? null : (
        <TouchableOpacity
          onPress={handlePassword}
          disabled={type !== 'password' ? true : false}>
          <Image style={style.icon} source={icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
