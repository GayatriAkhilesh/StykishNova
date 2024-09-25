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

  const [fName, setFName] = useState('');
  const [modal, setModal] = useState(false);
  const [modalChoose, setModalChoose] = useState(false);
  const [profileImage, setProfileImage] = useState('');

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
        handleText={text => setFname(text)}
        placeholder="Last Name"
      />
      <CustomTextInput
        type="email"
        handleText={text => setFname(text)}
        placeholder="Email Address"
      />
      <CustomTextInput
        handleText={text => setFname(text)}
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
        onRequestClose={() => setModalChoose(false)} transparent>
        <View>
          <View style={responsiveStyle.chooseView}>
            <TouchableOpacity
              onPress={() => setModalChoose(false)}
              style={responsiveStyle.close}>
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
