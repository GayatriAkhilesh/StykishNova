import {Text, View} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../../context';

const OrderTotal = props => {
  const {total, charges} = props;
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  return (
    <View>
      <View style={responsiveStyle.container}>
        <View>
          <Text style={responsiveStyle.head}>Order Details</Text>
          <Text style={responsiveStyle.content}>Bag Total</Text>
          <Text style={responsiveStyle.content}>Bag Savings</Text>
          <Text style={responsiveStyle.content}>Coupon Discount</Text>
          <Text style={responsiveStyle.endContent}>Delivery</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={responsiveStyle.headEnd}>----</Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#000',
              lineHeight: 25,
            }}>
            ₹ {parseFloat(total).toFixed(2)}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: 'green',
              lineHeight: 25,
            }}>
            ₹ 0.00
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#48301f',
              lineHeight: 25,
            }}>
            Apply Coupon
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#000',
              lineHeight: 25,
            }}>
            ₹ {parseFloat(charges).toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={responsiveStyle.total}>
          Order Total
        </Text>
        <Text
          style={responsiveStyle.total}>
          ₹ {parseFloat(total + charges).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
export default OrderTotal;
