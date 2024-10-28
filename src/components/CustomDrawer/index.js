import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../../storage/action';

const CustomDrawer = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(dimensions.width, dimensions.height);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {firstName, lastName, email, profileImage} = useSelector(
    state => state,
  );

  const Contents = [
    {
      itemId: 0,
      itemName: 'Home',
      navigateTo: 'MyFooter',
      icon: require('../../assets/images/home-drawer.png'),
    },
    {
      itemId: 1,
      itemName: 'Category',
      navigateTo: 'Category',
      icon: require('../../assets/images/category-drawer.png'),
    },
    {
      itemId: 2,
      itemName: 'Orders',
      navigateTo: 'Orders',
      icon: require('../../assets/images/orders-drawer.png'),
    },
    {
      itemId: 3,
      itemName: 'Wishlist',
      navigateTo: 'Wishlist',
      icon: require('../../assets/images/wishlist-drawer.png'),
    },
    {
      itemId: 4,
      itemName: 'Your Account',
      navigateTo: 'Account',
      icon: require('../../assets/images/user-drawer.png'),
    },
  ];

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <View style={responsiveStyle.mainContainer}>
      {/*Profile*/}
      <TouchableOpacity
        style={responsiveStyle.accountTouch} onPress={() => navigation.navigate('Account')}>
        <View
          style={responsiveStyle.accountImage}
          >
          <Image
            source={
              profileImage === ''
                ? require('../../assets/images/profile-drawer.jpeg')
                : {uri: profileImage}
            }
            style={responsiveStyle.image}
          />
        </View>
        <View style={{marginLeft: 15, marginTop: 12, width: '70%'}}>
          <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
            {firstName} {lastName}
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
            {email}
          </Text>
        </View>
      </TouchableOpacity>
      {/*Drawer Content*/}
      <View style={{marginVertical: 15}}>
        <View>
          {Contents.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.itemId}
                onPress={() => navigation.navigate(item.navigateTo)}
                style={responsiveStyle.drawerView}>
                <View style={responsiveStyle.drawerInnerView}>
                  <Image source={item.icon} style={responsiveStyle.icon} />
                  <Text style={responsiveStyle.drawerText}>
                    {item.itemName}
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/right-arrow.png')}
                  style={responsiveStyle.iconSecond}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/*Log Out*/}
      <View>
        <TouchableOpacity
          onPress={handleSignout}
          style={responsiveStyle.logoutView}>
          <Image
            source={require('../../assets/images/right-arrow.png')}
            style={responsiveStyle.iconSecond}
          />
          <Text style={responsiveStyle.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {/*Contact Support*/}

      <View style={responsiveStyle.supportView}>
        <Text style={responsiveStyle.supportHead}>Contact Support</Text>
        <Text style={responsiveStyle.supportInnerText}>
          If you encounter any issues with the app, do not hesitate to reach out
          to our 24/7 support system for assistance.
        </Text>

        <View style={responsiveStyle.supportTouch}>
          <Text style={responsiveStyle.supportText}>Contact</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
