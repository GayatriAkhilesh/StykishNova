import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth';
import {useDimensionContext} from '../../context';
import {validateEmail} from '../../components/Common/validations';
import {useDispatch} from 'react-redux';
import {login} from '../../storage/action';

const Login = () => {
  const dimensions = useDimensionContext();
  // console.warn(dimensions);
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  function onAuthStateChanged(user) {
    // console.warn(user);
    // setUser(user);
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const hamdleLogin = async () => {
    if (email.trim() !== '' && password.trim() !== '') {
      if (validateEmail(email.trim())) {
        await firestore()
          .collection('Users')
          .where('email', '==', email.trim().toLocaleLowerCase())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              Snackbar.show({
                text: 'This user is not registered with us, so please create a new account.',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
                textColor: 'white',
              });
            } else {
              snapshot.forEach(documentSnapshot => {
                const respData = documentSnapshot.data();

                console.warn(respData);

                if (password.trim() === respData.password) {
                  Snackbar.show({
                    text: 'Login Successfull',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'green',
                    textColor: 'white',
                  });
                  dispatch(
                    login({
                      userId: documentSnapshot.id,
                      firstName: respData.firstName,
                      lastName: respData.lastName,
                      email: respData.email,
                      mobilenumber: respData.mobilenumber,
                      profileImage: respData.profileimage,
                    }),
                  );
                  // navigation.navigate('AppDrawer');
                } else {
                  Snackbar.show({
                    text: 'The Password is incorrect.',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                    textColor: 'white',
                  });
                }
              });
            }
          })
          .catch(err => console.warn(err));
      } else {
        Snackbar.show({
          text: 'Enter a valid email.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
          textColor: 'white',
        });
      }
    } else {
      Snackbar.show({
        text: 'Fill up the fields to continue.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
        textColor: 'white',
      });
    }
  };

  const handleGoToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleGoToLoginPhone = () => {
    navigation.navigate('LoginPhone');
  };

  const handleButtonPress = () => {};

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
        <Text style={responsiveStyle.logintxt}>Login Account</Text>

        <CustomTextInput
          type="email"
          handleText={text => setEmail(text)}
          placeholder="Email Address"
        />
        <CustomTextInput
          type="password"
          handleText={text => SetPassword(text)}
          placeholder="Password"
        />
        <CustomButton
          type="primary"
          handleButtonPress={hamdleLogin}
          buttonText={'Sign In'}
        />
        <Text onPress={handleGoToSignUp} style={responsiveStyle.createNew}>
          Get started here if you're new!
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text
              style={{
                textAlign: 'center',
                paddingHorizontal: 8,
                fontFamily: 'Poppins-Regular',
                color: '#48301f',
              }}>
              Or Login With
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '48301f'}} />
        </View>
        <CustomButton
          type="secondary"
          handleButtonPress={handleGoToLoginPhone}
          buttonText={'Sign In with Phone'}
          icon={require('../../assets/images/smartphone.png')}
        />
        <CustomButton
          type="secondary"
          handleButtonPress={handleButtonPress}
          buttonText={'Sign In with Google'}
          icon={require('../../assets/images/google-pink.png')}
        />
      </ScrollView>
      <View style={responsiveStyle.footer}>
        <Text style={responsiveStyle.footerText}>Log in as a Guest</Text>
      </View>
    </View>
  );
};

export default Login;
