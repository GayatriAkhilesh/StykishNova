import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 20,
    },
    head: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 25,
      color: '#000',
      textAlign: 'center',
    },
    userImage: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    bigImage: {
      width: width * 0.8,
      height: width * 0.8,
    },
    image: {
      width: width * 0.4,
      height: width * 0.4,
      borderRadius: width * 0.2,
    },
    modalBg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    edit: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    editTouch: {
      position: 'absolute',
      right: 6,
      bottom: 2,
    },
    close: {
      backgroundColor: '#fff',
      borderRadius: 25,
      position: 'absolute',
      zIndex: 9,
      right: 24,
      top: height * 0.23,
    },

    chooseView: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 100,
      width: 220,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    cameraHolder: {
      backgroundColor: '#ee1b4d',
      height: 50,
      width: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    galleryHolder: {
      backgroundColor: '#ee1b4d',
      height: 50,
      width: 75,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    camera: {
      height: 35,
      width: 35,
    },
    gallery: {
      height: 35,
      width: 35,
    },
  });

export default style;
