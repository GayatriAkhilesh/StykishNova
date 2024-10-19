import React, {useEffect, useState} from 'react';
import style from './style';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';

const Account = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const [fName, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phNumber, setPhNumber] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const [fNameError, setFnameError] = useState('');
  const [lnameError, setLnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phNumberError, setPhNumberError] = useState('');

  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const handleEditImage = () => {
    setModalChoose(true);
  };

  const handlePickFromGallery = () => {
    setModalChoose(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.warn(image);
        setProfileImage(image.path ?? '');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handlePickFromCamera = () => {
    setModalChoose(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleOpenImage = () => {
    setModal(!modal);
  };

  const validateFirstName = () => {
    if (fName.trim === '') {
      setFnameError('First Name is required.');
      return false;
    } else if (!/^[A-Za-z]+$/.test(fName)) {
      setFnameError('First Name should contain only alphabets. ');
      return false;
    } else {
      setFnameError('');
      return true;
    }
  };

  const validateLastName = () => {
    if (lname.trim === '') {
      setLnameError('Last Name is required.');
      return false;
    } else if (!/^[A-Za-z]+$/.test(lname)) {
      setLnameError('Last Name should contain only alphabets. ');
      return false;
    } else {
      setLnameError('');
      return true;
    }
  };

  const validateEmail = () => {
    if (email.trim === '') {
      setEmailError('Email is required.');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email address.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePhoneNumber = () => {
    if (phNumber.trim === '') {
      setPhNumberError('Phone Number is required. ');
      return false;
    } else if (!/^\d{10}$/.test(phNumber)) {
      setPhNumberError('Phone number should be 10 digits.');
    } else {
      setPhNumberError('');
      return true;
    }
  };

  const handleUpdateProfile = () => {};
  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>Gayatri Sivakumar</Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            source={
              profileImage === ''
                ? require('../../assets/images/profile-drawer.jpeg')
                : {uri: profileImage}
            }
            style={responsiveStyle.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={responsiveStyle.editTouch}
          onPress={handleEditImage}>
          <Image
            source={require('../../assets/images/edit-image.png')}
            style={responsiveStyle.edit}
          />
        </TouchableOpacity>
      </View>

      <CustomTextInput
        handleText={text => setFname(text)}
        placeholder="First Name"
      />
      <CustomTextInput
        handleText={text => setLname(text)}
        placeholder="Last Name"
      />
      <CustomTextInput
        type="email"
        handleText={text => setEmail(text)}
        placeholder="Email Address"
      />
      <CustomTextInput
        handleText={text => setPhNumber(text)}
        placeholder="Mobile Number"
      />
      <CustomButton
        type="primary"
        handleButtonPress={handleUpdateProfile}
        buttonText={'Update Profile'}
      />

      <Modal visible={modal} onRequestClose={() => setModal(false)} transparent>
        <View style={responsiveStyle.modalBg}>
          <TouchableOpacity
            onPress={() => setModal(false)}
            style={responsiveStyle.close}>
            <Image
              source={require('../../assets/images/close.png')}
              style={responsiveStyle.edit}
            />
          </TouchableOpacity>
          <Image
            style={responsiveStyle.bigImage}
            source={
              profileImage === ''
                ? require('../../assets/images/profile-drawer.jpeg')
                : {uri: profileImage}
            }
          />
        </View>
      </Modal>

      <Modal
        visible={modalChoose}
        onRequestClose={() => setModalChoose(false)}
        transparent>
        <View style={responsiveStyle.chooseOptions}>
          <View style={responsiveStyle.chooseView}>
            <TouchableOpacity
              onPress={() => setModalChoose(false)}
              style={responsiveStyle.closeOptions}>
              <Image
                source={require('../../assets/images/close.png')}
                style={responsiveStyle.edit}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePickFromCamera}
              style={responsiveStyle.cameraHolder}>
              <Image
                source={require('../../assets/images/dslr-camera.png')}
                style={responsiveStyle.camera}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePickFromGallery}
              style={responsiveStyle.galleryHolder}>
              <Image
                source={require('../../assets/images/gallery.png')}
                style={responsiveStyle.gallery}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Account;
