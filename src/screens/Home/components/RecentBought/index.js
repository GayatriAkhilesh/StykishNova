import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../../../context';
import style from './style';
import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const RecentBought = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

  const navigation = useNavigation();

  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await firestore()
      .collection('Products')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('Its empty');
        } else {
          const result = [];
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              result.push(doc.data());
            }
          });
          setRecentItems(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleProduct = item =>{
    navigation.navigate('ProductDetails',{ product:item})
  }

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
            <TouchableOpacity onPress={() => handleProduct(item)} style={responsiveStyle.contentView}>
              <Image source={{uri: item.image}} style={responsiveStyle.image} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default RecentBought;
