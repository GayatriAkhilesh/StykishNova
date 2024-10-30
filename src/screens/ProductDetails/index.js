import {Image, ScrollView, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating-widget';
import Moreinfo from './Components/Moreinfo';
import Extrainfo from './Components/Extrainfo';
import ProductReview from './Components/ProductReview';
import DeliveryInfo from './Components/DeliveryInfo';
import ProductScroll from '../../components/ProductScroll';

const ProductDetails = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  const route = useRoute();
  const navigation = useNavigation();
  const {product} = route.params;
  const [rating, setRating] = useState(4);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => <CommonHeaderRight cart={true} share={true} />,
      title: '',
    });
  }, []);

  return (
    <View>
    <ScrollView>
      <View style={responsiveStyle.heart}>
        {/* <FontAwesome name="heart" size={25} color="#d20a2e" /> */}
        <FontAwesome name="heart-o" size={25} color="#d20a2e" />
      </View>

      <Image source={{uri: product.image}} style={responsiveStyle.proImage} />
      <View style={responsiveStyle.mainView}>
        <View style={responsiveStyle.padding}>
          <Text style={responsiveStyle.name}>{product.name}</Text>

          <View style={responsiveStyle.reviewCount}>
            <StarRating
              rating={rating}
              onChange={setRating}
              starSize={25}
              color="#48301f"
            />
            <Text style={responsiveStyle.reviewText}>(1 rating)</Text>
          </View>

          <View style={responsiveStyle.reviewCount}>
            <Text style={responsiveStyle.price}>
              ₹ {parseFloat(product.price).toFixed(2)}
            </Text>
            <Text style={responsiveStyle.offText}>25% off</Text>
          </View>

          <Moreinfo />

          <View style={responsiveStyle.descView}>
            <Text style={responsiveStyle.descriptionHead}>Product details</Text>
            <Text style={responsiveStyle.description}>
              {product.description}Products are made from premium materials and
              undergo strict quality control to ensure durability and
              reliability. They offer superior performance, excellent
              craftsmanship, and attention to detail. Designed to meet customer
              expectations, these products provide long-lasting value and
              satisfaction.
            </Text>
          </View>
          <Extrainfo />
          <ProductReview />
          <DeliveryInfo />
        </View>
        <ProductScroll />
        
      </View>
    </ScrollView>
    <View style={responsiveStyle.finalView}>
        <View style={responsiveStyle.quantity}>
        <FontAwesome name="minus" size={15} color="#48301f" />

          <Text style={responsiveStyle.quantityText}>1</Text>
          <FontAwesome name="plus" size={15} color="#48301f" />
        </View>
        <Text style={responsiveStyle.cartText}>Add to Cart</Text>
        </View>
    </View>
  );
};

export default ProductDetails;
