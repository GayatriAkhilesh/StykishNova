import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
      padding: 15,
    },
    removeView:{
      position:'absolute',
      top:-10,
      right:6,
      overflow:'hidden',
    },
    remove:{
      width:20,
      height:20,
      resizeMode:'contain',
    },
    productView: {
      alignSelf: 'center',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.95,
      padding: 10,
      backgroundColor: '#fff',
      marginTop: 10,
      marginBottom:15,
    },
    cartIcon: {
      width: 35,
      height: 35,
      resizeMode: 'contain',
      marginRight: 15,
    },
    cartCount:{
      position:'absolute',
      right:10,
      top:-10,
      width:23,
      height:23,
      backgroundColor: '#48301f',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      overflow:'hidden',
      zIndex:9,
    },
    count:{
      fontFamily:'Poppins-SemiBold',
      fontSize:14,
      color:'#fff'
    },
    productImage: {
      width: 90,
      height: 90,
      resizeMode: 'contain',
      borderRadius: 10,
    },
    secondView: {
      borderLeftColor: '#373737',
      borderLeftWidth: 1,
      padding: 10,
      marginLeft: 10,
      width:width*0.65,
      overflow:'hidden',
    },
    title: {
      fontFamily: 'Poppins-Bold',
      fontSize: 18,
      color: '#000',
    },
    price:{
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
      color: '#000',
    },
    desc: {
      fontFamily: 'Poppins-Regular',
      fontSize: 13,
      color: '#0c0908',
    },
    bottomView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
    offView: {
      borderRadius: 15,
      backgroundColor: '#48301f',
      padding: 5,
      marginHorizontal: 5,
    },
    offText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#fff',
    },
    cartView: {
      borderRadius: 15,
      borderColor: '#48301f',
      borderWidth: 1,
      padding: 5,
      marginHorizontal: 5,
    },
    cartText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#48301f',
    },
    emptyView:{
      padding:15,
      justifyContent:'center',
      alignItems:'center',
    },
    emptyText:{
      fontFamily:'Poppins-Italic',
      fontSize:20,
      color:'#48301f',
    },
    wishButton:{
      fontFamily:'Poppins-Regular',
      fontSize:16,
      color:'#fff',
    },
    buttonView:{
      margin:20,
      padding:10,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#48301f',
    },
  });

export default style;
