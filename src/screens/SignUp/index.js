import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/Common/validations';
import Snackbar from 'react-native-snackbar';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDimensionContext} from '../../context';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, SetPassword] = useState('');
  const [cpassword, SetCpassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1052496758263-r69ofn8tvu6m03ud9dc08k5e2oq3kalo.apps.googleusercontent.com',
    });
  }, []);

  const handleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    } catch (error) {
      console.warn(error);
    }
  };

  const handleGoToLogIn = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    if (
      username.trim() !== '' &&
      email.trim() !== '' &&
      mobile.trim() !== '' &&
      password.trim() !== '' &&
      cpassword.trim() !== ''
    ) {
      if (validateEmail(email.trim())) {
        if (validatePhoneNumber(mobile.trim())) {
          if (password.trim() === cpassword.trim()) {
            await firestore()
              .collection('Users')
              .where('username', '==', username.trim())
              .where('email', '==', email.trim())
              .get()
              .then(async snapshot => {
                if (snapshot.empty) {
                  if (validateEmail(email.trim())) {
                    if (validatePhoneNumber(mobile.trim())) {
                      const userData = {
                        username: username.trim(),
                        email: email.trim(),
                        mobilenumber: mobile.trim(),
                        password: password.trim(),
                        created: String(new Date()),
                        updated: String(new Date()),
                      };
                      await firestore()
                        .collection('Users')
                        .add(userData)
                        .then(resp => {
                          Snackbar.show({
                            text: 'You have been granted access to a new account.',
                            duration: Snackbar.LENGTH_LONG,
                            backgroundColor: 'green',
                            textColor: 'white',
                          });
                          navigation.navigate('Home');
                        })
                        .catch(err => {
                          console.warn(err);
                        });
                    } else {
                      setError('Given Mobile number is not valid !');
                    }
                  } else {
                    setError('Given email is not valid !');
                  }
                } else {
                  Snackbar.show({
                    text: 'Sorry, but it seems like this email address is already in use.',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                    textColor: 'white',
                  });
                }
              });
          } else {
            setError('Given passwords does not matching !');
          }
        } else {
          setError('Given mobile number is not valid');
        }
      } else {
        setError('Given email is not valid');
      }
    } else {
      setError('Please fill all the fields to continue');
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
        <Text style={responsiveStyle.logintxt}>Sign Up Account</Text>

        {error !== null ? (
          <View style={responsiveStyle.errorView}>
            <Text style={responsiveStyle.errorText}>{error}</Text>
          </View>
        ) : null}

        <CustomTextInput
          handleText={text => setUsername(text)}
          placeholder="Username"
        />

        <CustomTextInput
          type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address"
        />
        <CustomTextInput
          type="phone"
          handleText={text => setMobile(text)}
          placeholder="Mobile Number"
        />
        <CustomTextInput
          type="password"
          handleText={text => SetPassword(text)}
          placeholder="Password"
        />
        <CustomTextInput
          type="password"
          handleText={text => SetCpassword(text)}
          placeholder="Confirm Password"
        />
        <CustomButton
          type="primary"
          handleButtonPress={handleSignUp}
          buttonText={'Sign Up'}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 8,
                fontFamily: 'Poppins-Regular',
                color: '#41424c',
              }}>
              Or Sign Up With
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText={'Sign Up with Google'}
          icon={require('../../assets/images/google-pink.png')}
        />
        <Text onPress={handleGoToLogIn} style={responsiveStyle.createNew}>
          Get back to Login
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;
