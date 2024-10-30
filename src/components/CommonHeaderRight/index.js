import {Image, TouchableOpacity, View, Text} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {useDimensionContext} from '../../context';
import Feather from 'react-native-vector-icons/Feather';


const CommonHeaderRight = props => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const handleClick = () => {
   
      navigation.navigate('Cart');
   
  };

  return (
    <View style={responsiveStyle.flexStyle}>
     {props.share ? (
        <TouchableOpacity style={responsiveStyle.padding} onPress={handleClick}>
             <Feather name="share-2" size={25} color="#48301f"/>
        </TouchableOpacity>
      ) : null}
      {props.cart ? (
        <TouchableOpacity style={responsiveStyle.padding} onPress={handleClick}>
            <>
          <View style={responsiveStyle.cartCount}>
            <Text style={responsiveStyle.count}>3</Text>
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
