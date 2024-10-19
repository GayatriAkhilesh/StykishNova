import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    height: height,
  },
  main:{
    flex:1,
    // backgroundColor:'#0808',
  },
  
  footText:{
    fontFamily:'Poppins-SemiBold',
    fontSize:22,
    color:'#59515e',
    padding:15,
  },
  footButton:{
    padding:10,
    backgroundColor:'#e3256b',
    width:'50%',
    marginHorizontal:15,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:50,
  },
  footButtonText:{
    color:'#fff',
    fontFamily:'Poppins-SemiBold',
    fontSize:14,
  }
});

export default style;
