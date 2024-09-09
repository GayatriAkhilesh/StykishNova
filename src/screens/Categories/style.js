import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    main: {
      flex: 1,
    },
    container: {
      height: height,
    },
    catImage: {
      width: width * 0.2,
      height: width * 0.2,
      resizeMode: 'contain',
      margin: 10,
    },
    catFlatstyle: {
      padding: 10,
      backgroundColor: '#f8dae0',
      width: width * 0.3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    catTouch: {
      borderBottomColor: '#000',
      borderBottomWidth: 0.8,
    },
    rowstyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    backImage: {
      width: width * 0.65,
      height: height * 0.15,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
      overflow: 'hidden',
    },
    catName: {
      fontFamily: 'Poppins-Bold',
      fontSize: 22,
      textAlign: 'center',
      padding: 2,
      color: '#231709',
    },

    proContaioner: {
      width:width*0.33,
      padding: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    proImage: {
      width: width * 0.15,
      height: width * 0.15,
      resizeMode: 'center',
      alignSelf: 'center',
    },
    prostyle: {
      justifyContent: 'center',
      padding: 10,
    },
    imageBg: {
      backgroundColor: '#fff',
      padding: 10,
      justifyContent: 'center',
      borderRadius: 15,
    },
    catProName: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      textAlign: 'center',
      padding: 2,
      color: '#231709',
    },
    catPrice: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      textAlign: 'center',
      color: '#231709',
    },
  });

export default style;
