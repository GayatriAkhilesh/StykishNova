import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 15,
    },
    productView: {
      alignSelf: 'center',
      borderRadius: 15,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.95,
      padding: 15,
      backgroundColor: '#fff',
      marginTop: 10,
    },
    cartIcon: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
      marginRight: 15,
    },
    productImage: {
      width: 90,
      height: 90,
      resizeMode: 'contain',
      borderRadius: 10,
    },
    secondView: {
      borderLeftColor: '#373737',
      borderLeftWidth: 1,
      padding: 10,
      marginLeft: 10,
      width:width*0.65,
      overflow:'hidden',
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      color: '#000',
    },
    desc: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#0c0908',
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
    offView: {
      borderRadius: 15,
      backgroundColor: '#ee1b4d',
      padding: 5,
      marginHorizontal: 5,
    },
    offText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#fff',
    },
    cartView: {
      borderRadius: 15,
      borderColor: '#ee1b4d',
      borderWidth: 1,
      padding: 5,
      marginHorizontal: 5,
    },
    cartText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#ee1b4d',
    },
  });

export default style;
