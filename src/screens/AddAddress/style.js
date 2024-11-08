import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    textInput: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#48301f',
      backgroundColor: '#c6ab80',
      height: 50,
      width: width * 0.95,
      margin: 10,
      alignSelf: 'center',
    },
    description: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
    },
    mapView: {
      height: height * 0.4,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchView: {
      padding: 15,
      marginVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    touchText: {
      fontSize: 18,
      fontFamily: 'Poppins-SemiBold',
      color: '#48301f',
    },
    iconView: {
      borderRadius: 8,
      padding: 10,
      backgroundColor: '#48301f',
      marginRight: 10,
    },
    mapAddView: {
      paddingHorizontal: 15,
      paddingTop:15,
    },
    mapAddText: {
      color: '#000',
      fontFamily: 'Poppins-Regular',
      fontSize: 18,
    },
    activityIndi:{
      height:'100%',
      width:'100%',
      backgroundColor:'rgba(0,0,0,0.7)'
    }
  });

export default style;
