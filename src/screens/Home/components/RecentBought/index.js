import {FlatList, Image, Text, View} from 'react-native';
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
      image: require('../../../../assets/images/dress.jpg'),
    },
    {
      id: 1,
      image: require('../../../../assets/images/high-heels.jpg'),
    },
    {
      id: 2,
      image: require('../../../../assets/images/jeans.jpg'),
    },
    {
      id: 3,
      image: require('../../../../assets/images/mascara.jpg'),
    },
    {
      id: 4,
      image: require('../../../../assets/images/flat-sandals.jpg'),
    },
    {
      id: 5,
      image: require('../../../../assets/images/t-shirt.jpg'),
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
              <Image source={item.image} style={responsiveStyle.image} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default RecentBought;
