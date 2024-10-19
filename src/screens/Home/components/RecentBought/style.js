import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
      // overflow:'hidden'
    },
    headText:{
      marginLeft:10,
    },
    image: {
      width: 70,
      height: 70,
      resizeMode:'cover',
    },
    contentView: {
      backgroundColor:'#0808',
      // padding: 10,
      marginRight: 15,
      borderRadius: 10,
    },
    gradientBg:{

    },
    headText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      marginBottom: 10,
      color: '#000',
    },
  });

export default style;
