import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {useDimensionContext} from '../../context';
import {useEffect, useRef, useState} from 'react';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import CommonHeaderRight from '../../components/CommonHeaderRight';
import {useNavigation} from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';
import ActionSheet from 'react-native-actions-sheet';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const Review = () => {
  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type="back" />,
      headerRight: () => (
        <CommonHeaderRight plus={true} handlePlusIcon={openActionSheet} />
      ),
      title: 'Reviews',
    });
  }, []);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const [rating, setRating] = useState(0);
  const actionSheetRef = useRef(null);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={responsiveStyle.container}>
      <View>
        <View style={responsiveStyle.reviewView}>
          <Text style={responsiveStyle.mainText}>Product Review (1)</Text>
        </View>
        <View style={responsiveStyle.reviewContent}>
          <View style={responsiveStyle.customer}>
            <Image
              source={require('../../assets/images/profile-drawer.jpeg')}
              style={responsiveStyle.reviewImage}
            />
            <View>
              <Text style={responsiveStyle.reviewName}>Ana Alex</Text>
              <StarRating
                rating={rating}
                onChange={setRating}
                starSize={20}
                color="#48301f"
              />
            </View>
          </View>
          <Text style={responsiveStyle.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodsequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            siserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
      <ActionSheet ref={actionSheetRef}>
        <View style={responsiveStyle.sheetView}>
          <Text style={responsiveStyle.sheetText}>Write a Review.</Text>
          <StarRating
            rating={rating}
            onChange={setRating}
            starSize={30}
            color="#48301f"
          />
          <CustomTextInput
            placeholder="Write a review here ..."
            multiline={true}
          />
          <CustomButton buttonText={'Submit Review'} type="primary"/>
        </View>
      </ActionSheet>
    </ScrollView>
  );
};

export default Review;
