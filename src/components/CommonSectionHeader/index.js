import {Text, View} from 'react-native';
import style from './style';
import { useDimensionContext } from '../../context';

const CommonSectionHeader = props => {
    const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  return (
    <View style={responsiveStyle.headView}>
      <View>
        <Text style={responsiveStyle.headText}>{props.head}</Text>
        <Text style={responsiveStyle.contentText}>{props.content}</Text>
      </View>
      <Text style={responsiveStyle.seeAll}>{props.rightText}</Text>
    </View>
  );
};

export default CommonSectionHeader;
