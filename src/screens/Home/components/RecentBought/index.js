import {FlatList, Image, ImageBackground, Text, View} from 'react-native';
import {useDimensionContext} from '../../../../context';
import style from './style';

const RecentBought = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const recentItems = [
    {
      id: 0,
      image: require('../../../../assets/images/young-woman-screaming-while-looking-up.png'),
    },
    {
      id: 1,
      image: require('../../../../assets/images/high-heel-shoes.png'),
    },
    {
      id: 2,
      image: require('../../../../assets/images/full-body-portrait-happy-smiling-beautiful-young-woman-white.png'),
    },
    {
      id: 3,
      image: require('../../../../assets/images/cosmetic-parts-face-beauty.png'),
    },
    {
      id: 4,
      image: require('../../../../assets/images/sandal-beach-accessory-decoration-clothes.png'),
    },
    {
      id: 5,
      image: require('../../../../assets/images/beautiful-luxury-necklace-jewelry-stand-neck.png'),
    },
  ];
  return (
    <View style={responsiveStyle.container}>
      
        <Text style={responsiveStyle.headText}>View your recently bought</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          data={recentItems}
          renderItem={({item, index}) => {
            return (
              <View style={responsiveStyle.contentView}>
                <ImageBackground
                  source={require('../../../../assets/images/gradient.png')}
                  style={responsiveStyle.gradientBg}>
                  <Image source={item.image} style={responsiveStyle.image} />
                </ImageBackground>
              </View>
            );
          }}
        />
      
    </View>
  );
};

export default RecentBought;
