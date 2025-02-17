import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: isPortrait? width * 0.19 : width*0.08,
      backgroundColor: '#fff',
      marginTop: -7,
      marginLeft: -4,
      marginRight: -4,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      padding: width * 0.03,
    },
    sideIcon: {
      resizeMode: 'contain',
      height:isPortrait? width * 0.115 : width*0.050,
      width: isPortrait? width * 0.15 : width*0.09,
      marginTop: width * 0.016,
    },
    logo: {
      resizeMode: 'contain',
      height: isPortrait?  width * 0.40 : width*0.065,
      width: isPortrait? width * 0.25: width*0.08,
      marginTop: width * 0.016,
      marginRight:-10,
    },
  });

export default style;
