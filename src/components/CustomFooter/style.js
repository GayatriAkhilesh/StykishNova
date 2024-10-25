import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    mainContainer: {
      height: isPortrait ? height * 0.125 : height * 0.20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#48301f',
    },
    touchContainer: {justifyContent: 'center', alignItems: 'center'},
    iconStyle: {
      width: isPortrait ? width * 0.07 : width * 0.05,
      height: isPortrait ? width * 0.07 : width * 0.05,
      resizeMode: 'contain',
    },
    footerText: {
      color: '#fff',
      fontSize: isPortrait ? 14 : 12,
      fontFamily: 'Poppins-Medium',
      marginTop: isPortrait ? width * 0.01 : null,
    },
    dot: {
      fontSize: isPortrait ? 60 : 40,
      color: '#fff',
      textAlign: 'center',
      marginTop: -height * 0.06,
    },
    cartCount: {
      position:'absolute',
      right:-13,
      top:-10,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      overflow:'hidden',
      paddingHorizontal:8,
      paddingVertical:1,
      zIndex:9,
    },
    count: {
      color:'#48301f',
      fontFamily:'Poppins-SemiBold',
      fontSize:14,
      textAlign:'center'
    },
  });

export default style;
