import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    banner: {
      width: width * 0.94,
      height: width * 0.43,
      resizeMode: 'contain',
      overflow: 'hidden',
      marginVertical: 5,
      marginHorizontal:5,
      justifyContent:'center',
      alignItems:'center',
    },
    touch: {
      backgroundColor: '#481f01',
      padding: 6,
      justifyContent: 'center',
      alignItems: 'center',
      width:width*0.25,
      marginTop:width*0.1,
    },
    touchText: {
        color:'white',
        fontFamily:'Poppins-SemiBold',
        fontSize:14,
    },
  });

export default style;
