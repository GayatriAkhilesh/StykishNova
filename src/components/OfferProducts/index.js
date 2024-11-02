import React, {useEffect, useState} from 'react';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const OfferProducts = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);

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
          setProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleProduct = item => {
    navigation.navigate('ProductDetails', {product: item});
  };

  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Say Hello To Offers!'}
        content={'Best prices ever of all the time.'}
        rightText={'See All'}
      />

      <View>
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleProduct(item)}
                style={responsiveStyle.productView}>
                <Image
                  source={{uri: item.image}}
                  style={responsiveStyle.productImage}
                />
                <View style={responsiveStyle.productNameView}>
                  <Text style={responsiveStyle.name} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={responsiveStyle.dis} numberOfLines={1}>
                    {item.description}
                  </Text>
                  <View style={responsiveStyle.priceView}>
                    <View style={responsiveStyle.priceView2}>
                      <Text style={responsiveStyle.price}>₹ {item.price}</Text>
                      <View style={responsiveStyle.offView}>
                        <Text style={responsiveStyle.offText}>25%</Text>
                      </View>
                    </View>
                    <View style={responsiveStyle.quantityView}>
                      <Text style={responsiveStyle.quantityText1}>-</Text>
                      <Text style={responsiveStyle.quantityText2}>0</Text>
                      <Text style={responsiveStyle.quantityText1}>+</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default OfferProducts;
