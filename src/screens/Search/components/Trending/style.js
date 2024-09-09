import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    main: {
      flex: 1,
      padding: 15,
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      color: '#000',
    },
    flatList: {
      alignItems: 'center',
      marginVertical: 15,
    },
    imageCon: {
      backgroundColor: '#fbeaee',
      padding: 8,
      overflow: 'hidden',
      marginRight: 6,
    },
    image: {
      width: width * 0.18,
      height: height * 0.1,
      resizeMode: 'contain',
    },
  });

export default style;
