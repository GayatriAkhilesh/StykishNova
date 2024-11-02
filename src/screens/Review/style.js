import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        padding:15,
    },
    reviewContent: {
        padding: 15,
        backgroundColor: '#fff',
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
        fontFamily: 'Poppins-Italic',
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
      sheetView:{
        padding:20,
      },
      sheetText:{
        fontFamily:'Poppins-BlackItalic',
        fontSize:22,
        color:"#000"
      }
  });
export default style;
