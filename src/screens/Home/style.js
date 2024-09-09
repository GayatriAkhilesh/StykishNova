import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    height: height,
  },
  main:{
    flex:1,
  },
  footText:{
    fontFamily:'Poppins-Bold',
    fontSize:25,
    color:'#59515e',
    padding:15,
  },
  footButton:{
    padding:15,
    backgroundColor:'#ee1b4d',
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
