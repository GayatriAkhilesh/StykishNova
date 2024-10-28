import {StyleSheet} from 'react-native';

const style = (width, height, isPortrait) =>
  StyleSheet.create({
    container:{
        flex:1,
        borderRadius:10,
        borderColor:'#d2012e',
        borderWidth:1,
        padding:10,
        backgroundColor:"#fecad2",
    },
    title:{
        fontFamily:'Poppins-SemiBold',
        fontSize:18,
        color:"#d2012e"
    }
  });
export default style;
   