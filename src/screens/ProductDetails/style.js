import {StyleSheet} from 'react-native';
// import colors from '../../components/common/colors';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    proImage: {
      width: width * 0.9,
      height: width * 0.8,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 20,
    },
    heart: {
      position: 'absolute',
      right: 8,
      marginTop: 10,
    },
    mainView: {
      backgroundColor: '#fff',
      marginTop: 10,
      
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      shadowColor: '#000',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 15,
      paddingBottom:100,
    },
    padding:{
      padding: width * 0.05,
    },
    name: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 25,
      color: '#000',
      marginBottom: 3,
    },
    price: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 18,
      color: '#000',
      marginVertical: 6,
    },
    descriptionHead: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
      color: '#000',
    },
    description: {
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
      color: '#48301f',
    },
    reviewCount: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    reviewText:{
      fontFamily:'Poppins-Regular',
      marginLeft:10,
    },
    offText:{
      fontFamily:'Poppins-SemiBold',
      marginLeft:10,
      color:"green",
    },
    descView:{
      borderBottomWidth:1,
      borderBottomColor:'#C0C0C0',
      paddingBottom:10,
      
    },
    dropdown:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginVertical:10,
    },
    timeView:{
      flexDirection:'row',
      alignItems:'center',
      width:width*0.45,
      justifyContent:'space-evenly',
      backgroundColor:'#E9EAEC',
      padding:5,
      borderRadius:5,
    },
    timeText:{
      fontFamily:'Poppins-Regular',
      fontSize:15,
    },
    bgView:{
      backgroundColor:'#48301f',
    },
    finalView:{
      position:'absolute',
      bottom:1,
      alignSelf:'center',
      padding:15,
      // borderRadius:8,
      backgroundColor:'#c6ab80',
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center',
      width:'100%',
    },
    quantity:{
      padding:5,
      borderRadius:8,
      backgroundColor:'#fff',
      justifyContent:'space-evenly',
      flexDirection:'row',
      alignItems:'center',
      width:width*0.25,
    },
    quantityText:{
      color:'#48301f',
      fontFamily:'Poppins-SemiBold',
      fontSize:18,
    },
    cartText:{
      color:'#fff',
      fontFamily:'Poppins-SemiBold',
      fontSize:18,
    },
  });
export default style;
