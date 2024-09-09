import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {padding:15, backgroundColor:'#FFF'},
    headView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  
  });

export default style;
