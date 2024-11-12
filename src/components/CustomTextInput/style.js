import { Dimensions, StyleSheet } from "react-native";


const {width, height} = Dimensions.get('screen');
const style= StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        backgroundColor:'#c6ab80',
        padding: width * 0.01,
        borderRadius:8,
        marginVertical:13,
        borderWidth:1,
        borderColor:'#845b49',
    },
    textInput:{
        flex:1,
        width:'80%',
        color:'black',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    icon:{
        width: width * 0.05 ,
        height: width * 0.05 ,
        resizeMode:'contain',
        marginRight: width*0.025,
    },
    check:{
        fontFamily:'Poppins-SemiBold',
        color:'#48301f'
    }
    
});

export default style;