import React, {useEffect, useState} from 'react';
import style from './style';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {updateProfile} from '../../storage/action';
import {updateProfileImage} from './controller';

const Account = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const {userId, firstName, lastName, email, mobilenumber, profileimage} =
    useSelector(state => state);

  const dispatch = useDispatch();

  const [fName, setFname] = useState(firstName);
  const [lname, setLname] = useState(lastName);
  const [eMail, setEmail] = useState(email);
  const [phNumber, setPhNumber] = useState(mobilenumber);
  const [profileImage, setProfileImage] = useState('');

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
        console.warn('imageeeey', image);
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
      ('First Name is required.');
      return false;
    } else if (!/^[A-Za-z]+$/.test(fName)) {
      ('First Name should contain only alphabets. ');
      return false;
    } else {
      ('');
      return true;
    }
  };

  const validateLastName = () => {
    if (lname.trim === '') {
      ('Last Name is required.');
      return false;
    } else if (!/^[A-Za-z]+$/.test(lname)) {
      ('Last Name should contain only alphabets. ');
      return false;
    } else {
      ('');
      return true;
    }
  };

  const validateEmail = () => {
    if (eMail.trim === '') {
      ('Email is required.');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eMail)) {
      ('Invalid email address.');
      return false;
    } else {
      ('');
      return true;
    }
  };
  const validatePhoneNumber = () => {
    if (phNumber.trim == '') {
      return false;
    } else if (!/^\d{10}$/.test(phNumber)) {
    } else {
      return true;
    }
  };

  const handleUpdateProfile = async () => {
    if (phNumber !== '') {
      if (validatePhoneNumber(phNumber.trim())) {
        if (validateEmail(eMail)) {
          if (validateFirstName(fName) && validateLastName(lname)) {
            let newPath = '';
            if (profileImage !== '') {
              newPath = await updateProfileImage(profileImage);
            }
           
            await firestore()
              .collection('Users')
              .doc(userId)
              .update({
                firstName: fName,
                lastName: lname,
                email: eMail,
                mobilenumber: phNumber,
                profileImage: newPath,
              })
              .then(() => {
                dispatch(
                  updateProfile({
                    firstName: fName,
                    lastName: lname,
                    email: eMail,
                    mobilenumber: phNumber,
                    profileimage: newPath,
                  }),
                );
                Snackbar.show({
                  text: 'Profile updated successfully.',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'green',
                  textColor: 'white',
                });
              });

            
          } else
            Snackbar.show({
              text: 'Given name is invalid.',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#D20A2E',
              textColor: 'white',
            });
        } else {
          Snackbar.show({
            text: 'Given email address is invalid.',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#D20A2E',
            textColor: 'white',
          });
        }
      } else {
        Snackbar.show({
          text: 'Given phone number is invalid.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#D20A2E',
          textColor: 'white',
        });
      }
    }
  };
  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>
        {firstName} {lastName}
      </Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            source={
              profileImage === ''
                ? profileimage === ''
                  ? require('../../assets/images/profile-drawer.jpeg')
                  : {uri: profileimage}
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
        value={fName}
        placeholder="First Name"
      />
      <CustomTextInput
        handleText={text => setLname(text)}
        value={lname}
        placeholder="Last Name"
      />
      <CustomTextInput
        type="email"
        handleText={text => setEmail(text)}
        value={eMail}
        placeholder="Email Address"
      />
      <CustomTextInput
        handleText={text => setPhNumber(text)}
        value={phNumber}
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
