import {StyleSheet} from 'react-native';
// import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    catItemText: {
      fontFamily: 'Lato-Bold',
      fontSize:  isPortrait ? 18 : 14,
      color: '#c6ab80',
    },
    catItemView: {
      margin: 10,
    },
    categories: {
      backgroundColor: '#fff',
    },
    contentStyle: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    mainContainer: {
        width: width,
        height:isPortrait? height*0.94 :height*0.71,
    },
    CatContainer: {
        width: width,
        height: isPortrait? height*0.045 :height*0.08,
    },
    container: {
      height: height,
      padding:15,
    },
    categoryView:{zIndex: 1, height: 50, backgroundColor: 'green'},
    productView: {
      width: '100%',
      padding: 8,
      marginRight: 15,
      marginVertical: 8,
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
    
  });
export default style;
   