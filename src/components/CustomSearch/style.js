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
      borderColor: '#ec97ab',
      backgroundColor: '#fbeaee',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      padding: 2,
      width: width * 0.95,
    },
    newStyle:{
      borderWidth: 1,
      borderColor: '#ec97ab',
      backgroundColor: '#fbeaee',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 10,
      padding: 2,
      width: width * 0.775,
    },
    searchIcon: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    textInput: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      width:width * 0.60,
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
      color:'#ee1b4d',
    },
  });

export default style;
