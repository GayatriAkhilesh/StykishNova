import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {padding:15, backgroundColor:'#FFF'},
    headView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headText: {fontFamily: 'Poppins-Bold', fontSize: 22, color: '#000'},
    contentText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: '#000',
    },
    seeAll: {fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000'},
  });

export default style;
