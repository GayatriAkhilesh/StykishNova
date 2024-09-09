import {Text, View} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../../context';

const OrderTotal = () => {
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
              fontSize: 16,
              color: '#000',
              lineHeight: 30,
            }}>
            ₹ 2879.00
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: 'green',
              lineHeight: 30,
            }}>
            ₹ 0.00
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#ee1b4d',
              lineHeight: 30,
            }}>
            Apply Coupon
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#000',
              lineHeight: 30,
            }}>
            ₹ 50.00
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
          Order Details
        </Text>
        <Text
          style={responsiveStyle.total}>
          ₹ 2929.00
        </Text>
      </View>
    </View>
  );
};
export default OrderTotal;
