import { StyleSheet } from "react-native";



const style = (width, height) =>
     StyleSheet.create({
    container:{
        height:height,
    },
    topBg: {
        width:width,
        height:height * 0.2,
        resizeMode:'cover',
    },
    ScrollView:{
        flex:1,
        backgroundColor:'#f8f8f8',
        marginTop:-width * 0.01,
        borderTopRightRadius:width * 0.05,
        borderTopLeftRadius:width * 0.05,
        overflow:'hidden',
        padding:width * 0.03,
    },
    logo:{
        width:width * 0.5,
        height:width * 0.2,
        resizeMode:'contain',
    },
    logintxt:{
        marginLeft:width * 0.01 ,
        fontFamily:'Poppins-Regular',
        fontSize:19,
        color:'#48494b'
    },
    createNew:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        color:'#48494b',
        textAlign:'center',
        marginVertical: width * 0.018,
    },
    footer:{
       height:width * 0.12,
        padding:8,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#d0d1d9',
    },
    footerText:{
        fontFamily:'Poppins-Regular',
        fontSize:14,
        color:'#0c0908',
    }

})

export default style;