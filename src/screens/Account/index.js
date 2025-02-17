import React, {useEffect, useState} from 'react';
import style from './style';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../components/Common/validations';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../storage/action';
import {updateProfileImage} from './controller';

const Account = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const email = useSelector(state => state.email);
  const userId = useSelector(state => state.userId);
  const mobilenumber = useSelector(state => state.mobilenumber);
  const profileImage = useSelector(state => state.profileImage);

  const [fName, setFname] = useState(firstName);
  const [lname, setLname] = useState(lastName);
  const [eMail, setEmail] = useState(email);
  const [phNumber, setPhNumber] = useState(mobilenumber);
  const [userImage, setUserImage] = useState('');

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
        setUserImage(image.path ?? '');
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

  const handleUpdateProfile = async () => {
    if (phNumber !== '') {
      if (validatePhoneNumber(phNumber.trim())) {
        if (validateEmail(eMail)) {
          if (fName !== '' && lname !== '') {
            let newUrl = profileImage;
            if (userImage !== '') {
              newUrl = await updateProfileImage(userImage);
            }

            await firestore()
              .collection('Users')
              .doc(userId)
              .update({
                firstName: fName,
                lastName: lname,
                email: eMail,
                mobilenumber: phNumber,
                userImage: newUrl,
              })
              .then(() => {
                dispatch(
                  updateProfile({
                    firstName: fName,
                    lastName: lname,
                    email: eMail,
                    mobilenumber: phNumber,
                    profileImage: newUrl,
                  }),
                );
                setUserImage('');
                Snackbar.show({
                  text: 'Profile updated successfully.',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'green',
                  textColor: 'white',
                });
              });
          } else {
            Snackbar.show({
              text: 'Fill up all fields to continue.',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#D2042D',
              textColor: 'white',
            });
          }
        } else {
          Snackbar.show({
            text: 'Given email address is invalid',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#D2042D',
            textColor: 'white',
          });
        }
      } else {
        Snackbar.show({
          text: 'Given phone number is invalid',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#D2042D',
          textColor: 'white',
        });
      }
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>
        {firstName} {lastName}
      </Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
          <Image
            source={
              userImage === ''
                ? profileImage === ''
                  ? require('../../assets/images/profile-drawer.jpeg')
                  : {uri: profileImage}
                : {uri: userImage}
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
              userImage === ''
                ? require('../../assets/images/profile-drawer.jpeg')
                : {uri: userImage}
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
    </ScrollView>
  );
};

export default Account;
