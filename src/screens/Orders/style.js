import {StyleSheet} from 'react-native';

const style = (width, height) =>
  StyleSheet.create({
    container: {
      height: height,
    },
    flatView:{
      backgroundColor: '#c6ab80',
      borderRadius: 12,
      padding: 15,
      overflow: 'hidden',
      marginTop:15,
      marginHorizontal: 15,
    },
    innerView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#373737',
      borderBottomWidth: 1,
      paddingBottom: 15,
    },
    orderId:{
      color: '#000',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 16,
    },
    mapImage:{
      width: 100,
      height: 100,
      borderRadius: 15,
      overflow: 'hidden',
      resizeMode: 'cover',
    },
    bottomView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 15,
    },
    bottomText:{
      color: '#000',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
    },
    pinkText:{
      color: '#48301f',
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
    },
    address:{
      color: '#48301f',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
    },
    paidText:{
      color: '#000',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
    },
    orderedText:{
      color: '#48301f',
      fontFamily: 'Poppins-Regular',
      fontSize: 14,
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
