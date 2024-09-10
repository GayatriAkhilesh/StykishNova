import { Image, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';

const CommonHeaderLeft = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  return (
    <View>
      <TouchableOpacity
        style={responsiveStyle.padding}
        onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../../assets/images/left-drawer-icon.png')}
          style={responsiveStyle.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeaderLeft;
