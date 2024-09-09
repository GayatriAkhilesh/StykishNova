import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      margin: 15,
    },
    head: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      textAlign: 'center',
      color: '#000',
    },
    flatList: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15,
    },
    innerView: {
      justifyContent:'center',
      alignItems:'center',
      marginRight: 10,
      marginBottom: 10,
    },
    itemName: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#000',
    },
    image: {
      width: 70,
      height: 70,
      resizeMode: 'contain',
    },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding:5,
      marginBottom: 10,
      backgroundColor:'#fbeaee',
    },
  });

export default style;
