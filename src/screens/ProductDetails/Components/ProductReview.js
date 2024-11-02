import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../../context';
import style from './style';
import StarRating from 'react-native-star-rating-widget';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const ProductReview = props => {
  const{product} = props;
  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const [rating, setRating] = useState(4);


  const handleRedirect = () =>{
    navigation.navigate('Review',{ product:product})
  };

  return (
    <View style={responsiveStyle.reviewMainView}>
      <View style={responsiveStyle.reviewView}>
        <Text style={responsiveStyle.mainText}>Product Review (1)</Text>
        <TouchableOpacity onPress={handleRedirect}>
          <Text style={responsiveStyle.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={responsiveStyle.reviewContent}>
        <View style={responsiveStyle.customer}>
          <Image
            source={require('../../../assets/images/profile-drawer.jpeg')}
            style={responsiveStyle.reviewImage}
          />
            <View>
          <Text style={responsiveStyle.reviewName}>Ana Alex</Text>
          <StarRating rating={rating} onChange={() => {}} starSize={20} color='#48301f' />
          </View>

        </View>
        <Text style={responsiveStyle.reviewText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
};

export default ProductReview;
