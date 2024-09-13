import React, {useEffect} from 'react';
import style from './style';
import {Image, Text, View} from 'react-native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';

const Account = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>Gayatri</Text>
      <View style={responsiveStyle.userImage}>
        <Image source={require('../../assets/images/profile-drawer.jpeg')} style={responsiveStyle.image} />
      </View>
    </View>
  );
};

export default Account;
