import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {padding: 15, backgroundColor: '#fbeaee'},
    headView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    productView: {
      width: '100%',
      padding: 10,
      marginRight: 15,
      marginVertical: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    productImage: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginVertical: 10,
      marginLeft: -10,
    },
    productNameView: {
      borderLeftWidth: 1,
      paddingHorizontal: 12,
      marginRight: 100,
    },
    name: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: '#000',
    },
    dis: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      color: '#000',
    },
    priceView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    priceView2:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color: '#000',
    },
    offView: {
      padding: 5,
      borderRadius: 15,
      backgroundColor: '#ee1b4d',
      marginHorizontal: 10,
    },
    offText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#fff',
      marginHorizontal: 10,
    },
    quantityView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#ec97ab',
      overflow: 'hidden',
      padding: 5,
    },
    quantityText1:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#000',
      marginHorizontal: 6,
    },
    quantityText2:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color: '#ee1b4d',
      marginHorizontal: 6,
    }
  });

export default style;
