import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 15,
      marginBottom: 25,
    },
    productView: {
      width: '100%',
      padding: 8,
      marginRight: 15,
      marginVertical: 5,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    productImage: {
      width: 110,
      height: 110,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
      marginLeft: -10,
    },
    productNameView: {
      borderLeftWidth: 1,
      paddingHorizontal: 8,
      marginRight: 100,
    },
    name: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color: '#000',
    },
    dis: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      color: '#000',
    },
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    priceView2: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#000',
    },
    offView: {
      padding: 5,
      borderRadius: 15,
      backgroundColor: '#48301f',
      marginHorizontal: 8,
    },
    offText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      color: '#fff',
      marginHorizontal: 10,
    },
    quantityView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#845b49',
      overflow: 'hidden',
      padding: 5,
    },
    quantityText1: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      color: '#000',
      marginHorizontal: 5,
    },
    quantityText2: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#48301f',
      marginHorizontal: 5,
    },
    renderView: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width,
      alignSelf: 'center',
      justifyContent: 'center',
      marginVertical: height * 0.015,
    },
    offCircleView: {marginRight: (-height * 0.025) / 2, zIndex: 99},
    circleRight: {
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: '#f2f2f2',
    },
    circleCenter: {
      width: 25,
      height: 25,
      borderRadius: 25 / 2,
      backgroundColor: '#f2f2f2',
      marginTop: -25 / 2,
    },
    emptyView: {
      backgroundColor: '#fff',
      width: '90%',
      height: '45%',
      alignSelf:'center',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    emptyText:{
      fontFamily:'Poppins-Italic',
      color:'#48301f',
      fontSize:20,
      padding:10,
    },
  });

export default style;
