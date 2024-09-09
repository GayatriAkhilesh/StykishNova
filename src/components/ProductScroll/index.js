import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {FlatList, Image, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import CommonSectionHeader from '../CommonSectionHeader';

const ProductScroll = () => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
  );

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
              <View
                style={{
                  width: 160,
                  height: 310,
                  padding: 10,
                  marginLeft: 15,
                  marginVertical: 15,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#ec97ab',
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
                    fontFamily: 'Poppins-Bold',
                    fontSize: 20,
                    color: '#000',
                  }}
                  numberOfLines={1}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 16,
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
                      fontSize: 20,
                      color: '#000',
                    }}>
                    {item.price}
                  </Text>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: '#ee1b4d',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Bold',
                        fontSize: 20,
                        color: '#fff',
                      }}>
                      +
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProductScroll;
