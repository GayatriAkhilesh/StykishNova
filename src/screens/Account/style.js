import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 20,
    },
    head: {
      fontFamily: 'Poppins-Black',
      fontSize: 25,
      color: '#ee1b4d',
      textAlign: 'center',
    },
    userImage: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    image: {
      width: width * 0.4,
      height: width * 0.4,
      borderRadius: width * 0.2,
    },
    edit: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
    },
    editTouch: {
      position: 'absolute',
      right:6,
      bottom: 2,
    },
  });

export default style;
