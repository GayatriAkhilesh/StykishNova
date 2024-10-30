import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 15,
    },
    flexStyle:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
    },
    padding: {paddingRight: 15},
    image: {width: 28, height: 28, resizeMode: 'contain'},
    cartCount: {
      position:'absolute',
      right:6,
      top:-10,
      backgroundColor:'#48301f',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      overflow:'hidden',
      paddingHorizontal:6,
      paddingVertical:-4,
      zIndex:9,
    },
    count: {
      color:'#fff',
      fontFamily:'Poppins-SemiBold',
      fontSize:12,
      textAlign:'center'
    },
  });

export default style;