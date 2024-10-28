import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    mainContainer: {marginVertical: 10, padding: 15, overflow: 'hidden'},
    drawerView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      justifyContent: 'space-between',
    },
    accountTouch: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#41424c',
      paddingVertical: 15,
    },
    accoutImage:{
      width: 75,
      height: 75,
      borderRadius: 75 / 2,
      backgroundColor: '#ebecef',
      justifyContent: 'center',
      alignItems: 'center',
    },
    drawerInnerView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {width: 20, height: 20, resizeMode: 'contain', marginRight: 15},
    iconSecond: {width: 15, height: 15, resizeMode: 'contain', marginRight: 15},
    drawerText: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
    },
    image: {
      width: 75,
      height: 75,
      borderRadius: 50,
    },
    logoutView: {
      // borderColor: '#000',
      // borderWidth: 1,
      padding: 10,
      backgroundColor: '#ebecef',
      justifyContent: 'center',
      alignItems: 'center',
      width: '99%',
      borderRadius: 20,
      flexDirection: 'row',
    },
    logoutText: {fontFamily: 'Poppins-SemiBold', fontSize: 18},
    supportView: {
      borderRadius: 20,
      backgroundColor: '#ebecef',
      padding: 15,
      marginVertical: 15,
    },
    supportTouch: {
      borderRadius: 20,
      backgroundColor: '#41424c',
      padding: 10,
      marginVertical: 15,
      width: '98%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    supportText: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: '#fff',
    },
    supportHead: {
      fontFamily: 'Poppins-Medium',
      fontSize: 18,
    },
    supportInnerText: {
      fontFamily: 'Poppins-Medium',
    },
  });

export default style;
