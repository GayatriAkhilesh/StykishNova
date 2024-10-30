import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';
import { useNavigation } from '@react-navigation/native';

const ProductScroll = () => {
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


  const handleProducts = item => {
    navigation.navigate('ProductDetails', {product:item});
  };

  return (
    <View style={responsiveStyle.container}>
      <CommonSectionHeader
        head={'Newly Arrived'}
        content={'Pay Less, Get More'}
        rightText={'See All'}
      />

      <View>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
              onPress={() => handleProducts(item)}
                style={{
                  width: 135,
                  height: 280,
                  padding: 10,
                  marginLeft: 5,
                  marginVertical: 15,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#845b49',
                }}>
                <Image
                  source={require('../../assets/images/wishlist-product-outline.png')}
                  style={{
                    width: 18,
                    height: 18,
                    resizeMode: 'contain',
                    alignSelf: 'flex-end',
                  }}
                />
                <Image
                  source={{uri: item.image}}
                  style={{
                    width: 120,
                    height: 120,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    marginVertical: 10,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    color: '#000',
                  }}
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    color: '#000',
                  }}
                  numberOfLines={2}>
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      fontSize: 15,
                      color: '#000',
                    }}>
                    ₹{item.price}
                  </Text>
                  <View
                    style={{
                      padding: 3,
                      backgroundColor: '#48301f',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Bold',
                        fontSize: 16,
                        color: '#fff',
                      }}>
                      +
                    </Text>
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

export default ProductScroll;
