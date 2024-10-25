import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {padding: 15, backgroundColor: '#c6ab80'},
    headView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productView: {
      width: '100%',
      padding: 10,
      marginRight: 15,
      marginVertical: 10,
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
      marginVertical: 3,
      marginLeft: -10,
    },
    productNameView: {
      borderLeftWidth: 1,
      paddingHorizontal: 8,
      marginRight: 100,
    },
    name: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
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
      marginTop: 8,
    },
    priceView2:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
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
      fontSize: 12,
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
    quantityText1:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 12,
      color: '#000',
      marginHorizontal: 6,
    },
    quantityText2:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      color: '#48301f',
      marginHorizontal: 6,
    }
  });

export default style;
