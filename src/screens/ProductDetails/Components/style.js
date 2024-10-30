import {StyleSheet} from 'react-native';
// import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    dropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    timeView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.45,
      justifyContent: 'space-evenly',
      backgroundColor: '#E9EAEC',
      padding: 5,
      borderRadius: 5,
    },
    timeText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
    },
    descriptionHead: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#000',
    },
    description:{
      fontFamily: 'Poppins-Regular',
      fontSize: 13,
      color: '#48301f',
      lineHeight:30,
    },
    detailDrop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    detailedText: {
      fontFamily: 'Poppins-Regular',
    },
    reviewView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical:5,
      
    },
    reviewMainView: {
      marginVertical: 20,
    },
    seeAll: {
      color: '#c6ab80',
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
    },
    mainText: {
      color: '#000',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
    },
    reviewContent: {
      padding: 15,
      backgroundColor: '#c6ab80',
      borderRadius: 8,
      marginVertical: 10,
    },
    reviewName: {
      color: '#000',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      marginLeft: 10,
    },
    reviewText: {
      color: '#000',
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
    },
    reviewImage: {
      width: 30,
      height: 30,
      resizeMode: 'contain',
      borderRadius: 25,
      overflow: 'hidden',
    },
    customer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom:10,
    },
  });
export default style;
