import {Text, View} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../../context';
import CustomTextInput from '../../../components/CustomTextInput';

const DeliveryInfo = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  return (
    <View>
      <Text style={responsiveStyle.descriptionHead}>Check Delivery</Text>
      <Text style={responsiveStyle.description}>
        Enter pincode to check delivery date/pickup option.
      </Text>
      <CustomTextInput
        type={'default'}
        check={true}
        handleText={() => console.log('helloooooooooo')}
        placeholder={'Pin Code'}
      />
      <Text style={responsiveStyle.description}>
       Free Delivery on orders above ₹ 999.00
      </Text>

      <Text style={responsiveStyle.description}>
        Cash on delivery available.
      </Text>

      <Text style={responsiveStyle.description}>
        Easy 15 days return and exchange.
      </Text>

      
    </View>
  );
};

export default DeliveryInfo;
