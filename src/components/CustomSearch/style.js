import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 13,
    },
    newContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 13,
    },
    search: {
      borderWidth: 1,
      borderColor: '#59515e',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 6,
      paddingHorizontal: 5,
      width: width * 0.95,
    },
    newStyle:{
      borderWidth: 1,
      borderColor: '#845b49',
      backgroundColor: '#c6ab80',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      padding: 2,
      width: width * 0.775,
    },
    searchIcon: {
      width: 17,
      height: 17,
      resizeMode: 'contain',
    },
    textInput: {
      flex:1,
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      width:'80%',
      marginLeft:width * 0.012,
      color:'#3e3d53'
    },
    innerView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    filter:{
      fontFamily:'Poppins-Regular',
      fontSize:17,
      color:'#48301f',
    },
  });

export default style;
