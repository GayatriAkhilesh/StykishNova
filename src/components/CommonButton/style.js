import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor:'#48301f',
        padding:12,
        width: width* 0.9,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15,
    },
    text:{
        color:'#fff',
        fontFamily:'Poppins-SemiBold',
        fontSize:20,
    }
  });

export default style;
