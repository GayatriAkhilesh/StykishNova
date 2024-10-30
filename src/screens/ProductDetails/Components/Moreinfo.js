import { Text, View } from "react-native";
import { useDimensionContext } from "../../../context";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from "./style";

const Moreinfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  return (
    <View style={responsiveStyle.dropdown}>
      <View style={responsiveStyle.timeView}>
        <Text style={responsiveStyle.timeText}>Delivery Time</Text>
        <FontAwesome name="angle-down" size={25} color="#696969" />
      </View>
    </View>
  );
};

export default Moreinfo;
