import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {validateOtp, validatePhone} from './controller';
import {useDimensionContext} from '../../context';

const LoginPhone = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [error, setError] = useState(null);
  const [showOtpField, setShowOtpField] = useState(false);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const handleButtonPress = async () => {
    try {
      setError(null);
      if (validatePhone(phone.trim())) {
        const confirmation = await auth().signInWithPhoneNumber(phone);
        if (confirmation) {
          Snackbar.show({
            text: 'Verification code has been send to your phone number, Please verify.',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: 'green',
            textColor: 'white',
          });
          setConfirm(confirmation);
          setShowOtpField(true);
        }
      } else {
        setError('Oops! The phone number you entered is incorrect.');
      }
    } catch (error) {
      setError('Oops! The phone number you entered is incorrect.');
    }
  };

  const handleGoToLogIn = () => {
    navigation.goBack();
  };

  const handleVerifyOtp = async () => {
    if (otp.trim() !== '' && validateOtp(otp.trim())) {
      const res = await confirm.confirm(otp.trim());
      if (res) {
        Snackbar.show({
          text: 'Your phone number has been verified, Login Successful!',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'green',
          textColor: 'white',
        });
        navigation.navigate('Home');
      }
    } else {
      setError('You have entered an invalid OTP.');
    }
  };

  return (
    <View style={responsiveStyle.container}>
      <Image
        source={require('../../assets/images/aesthetic-login.png')}
        style={responsiveStyle.topBg}
      />
      <ScrollView style={responsiveStyle.ScrollView}>
        <Image
          source={require('../../assets/images/BLACK-WRITTEN-LOGO.png')}
          style={responsiveStyle.logo}
        />
        <Text style={responsiveStyle.logintxt}>Login with Phone Number</Text>

        {error !== null ? (
          <Text style={responsiveStyle.errorText}>{error}</Text>
        ) : null}

        <CustomTextInput
          handleText={text => setPhone(text)}
          placeholder="Phone Number"
          type="phone"
        />

        {showOtpField ? (
          <CustomTextInput
            handleText={text => setOtp(text)}
            placeholder="Enter OTP"
            type="phone"
          />
        ) : null}

        <CustomButton
          type="primary"
          handleButtonPress={showOtpField ? handleVerifyOtp : handleButtonPress}
          buttonText={showOtpField ? 'Verify OTP' : 'Sign In with Phone Number'}
        />
        <Text onPress={handleGoToLogIn} style={responsiveStyle.createNew}>
          Get back to Login
        </Text>
      </ScrollView>
    </View>
  );
};

export default LoginPhone;
