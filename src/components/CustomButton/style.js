import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
    button:{
        padding:width * 0.03,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: width * 0.025,
        flexDirection:'row',

    },
    icon:{
        width: width * 0.06,
        height: width * 0.06,
        marginRight:width*0.025,
    },
});

export default style;