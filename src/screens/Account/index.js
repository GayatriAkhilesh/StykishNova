import React, {useEffect} from 'react';
import style from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import CustomTextInput from '../../components/CustomTextInput';

const Account = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);



  const handleEditImage = () => {};

  const handleOpenImage = () => {};

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>Gayatri Sivakumar</Text>
      <View style={responsiveStyle.userImage}>
        <TouchableOpacity onPress={handleOpenImage}>
        <Image
          source={require('../../assets/images/profile-drawer.jpeg')}
          style={responsiveStyle.image}
        />
          </TouchableOpacity>
          <TouchableOpacity style={responsiveStyle.editTouch} onPress={handleEditImage}>
        <Image
          source={require('../../assets/images/edit-image.png')}
          style={responsiveStyle.edit}
        />
        </TouchableOpacity>
      </View>

    <CustomTextInput 
    handleText={text => setFname(text)}
    placeholder="First Name"/>

    </View>
  );
};

export default Account;
