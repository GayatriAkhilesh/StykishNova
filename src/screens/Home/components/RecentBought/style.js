import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fbeaee',
      borderRadius: 15,
      padding: 15,
      margin: 15,
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    contentView: {
      backgroundColor: '#fff',
      padding: 10,
      marginRight: 15,
      borderRadius: 50,
    },
    headText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      marginBottom: 10,
      color: '#000',
    },
  });

export default style;
