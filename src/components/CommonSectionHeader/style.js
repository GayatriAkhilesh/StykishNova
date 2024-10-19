import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {padding:15, backgroundColor:'#FFF'},
    headView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headText: {fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#000'},
    contentText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      color: '#000',
    },
    seeAll: {fontFamily: 'Poppins-Regular', fontSize: 14, color: '#000'},
  });

export default style;
