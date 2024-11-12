import {Image, TouchableOpacity, View, Text, Share} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import Feather from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

const CommonHeaderRight = props => {
  const navigation = useNavigation();
  const cartCount = useSelector(state => state.cartCount);

  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const handleClick = async (type) => {
    if (type === 'cart') {
      navigation.navigate('Cart');
    } else if (type === 'share') {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    }
  };

  return (
    <View style={responsiveStyle.flexStyle}>
      {props.share ? (
        <TouchableOpacity
          style={responsiveStyle.padding}
          onPress={() => handleClick('share')}>
          <Feather name="share-2" size={25} color="#48301f" />
        </TouchableOpacity>
      ) : null}
      {props.plus ? (
        <TouchableOpacity
          style={responsiveStyle.padding}
          onPress={props.handlePlusIcon}>
          <Feather name="plus-square" size={25} color="#48301f" />
        </TouchableOpacity>
      ) : null}
      {props.cart ? (
        <TouchableOpacity
          style={responsiveStyle.padding}
          onPress={() => handleClick('cart')}>
          <>
            <View style={responsiveStyle.cartCount}>
              <Text style={responsiveStyle.count}>{cartCount}</Text>
            </View>
            <Image
              source={require('../../assets/images/wishlist-cart.png')}
              style={responsiveStyle.image}
            />
          </>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CommonHeaderRight;
