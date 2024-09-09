import { Dimensions, StyleSheet } from "react-native";


const {width, height} = Dimensions.get('screen');
const style= StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fbeaee',
        padding: width * 0.01,
        borderRadius:8,
        marginVertical:13,
        borderWidth:1,
        borderColor:'#ec97ab',
    },
    textInput:{
        width:width * 0.7,
        color:'black',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    icon:{
        width: width * 0.05 ,
        height: width * 0.05 ,
        resizeMode:'contain',
        marginRight: width*0.025,
    }
    
});

export default style;