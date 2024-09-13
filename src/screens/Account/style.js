import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 15,
    },
    head: {fontFamily: 'Poppins-Black', fontSize: 25, color: '#000', textAlign:'center',},
    userImage:{
      alignSelf:'center',
      justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
    },
    image:{
      width:width*0.3,
      height:width*0.3,
      borderRadius:width*0.15,
    },

  });

export default style;
