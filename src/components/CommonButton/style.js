import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        borderRadius:15,
        backgroundColor:'#ee1b4d',
        padding:15,
        width: width* 0.9,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:15,
    },
    text:{
        color:'#fff',
        fontFamily:'Poppins-SemiBold',
        fontSize:22,
    }
  });

export default style;
