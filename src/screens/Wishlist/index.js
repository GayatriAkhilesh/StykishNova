import React, {useEffect} from 'react';
import style from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/wishlist-cart.png')}
              style={responsiveStyle.cartIcon}
            />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  const wishItems = [{
    id:1,
    image:require('../../assets/images/new-product-footwear.jpg'),
    title:'Flat Sandals',
    desc:'Pink Light Weight Flats',
    off:'30% Off',
    price:'599.00',
  },
  {
    id:2,
    image:require('../../assets/images/new-product-dress.jpg'),
    title:'Dress',
    desc:'Round Neck Short Sleeve Jumpsuit with Pockets',
    off:'20% Off',
    price:'1399.00',
  },
  {
    id:3,
    image: require('../../assets/images/new-product-dress-two.jpg'),
    title:'Shrugs',
    desc:'Madame Fleece Collar Grey Longline Shrug',
    off:'25% Off',
    price:'1574.00',
  },
  {
    id:4,
    image: require('../../assets/images/new-product-bag.jpg'),
    title:'HandBag',
    desc:'Miraggio Simone Saddle Women Shoulder Handbag',
    off:'40% Off',
    price:'1992.00',
  },
  {
    id:5,
    image: require('../../assets/images/new-product-earring.jpg'),
    title:'Earring',
    desc:'Skagen Women Kariana Rose Gold Earring',
    off:'10% Off',
    price:'4495.00',
  },
  {
    id:6,
    image: require('../../assets/images/new-product-skincare.jpg'),
    title:'SkinCare',
    desc:'Vitamin C  Serum For Glowing Skin For Dark Spots',
    off:'50% Off',
    price:'196.00',
  },
  {
    id:7,
    image: require('../../assets/images/new-product-comboset-jewellery.jpg'),
    title:'Pendant Set',
    desc:'GIVA 925 Silver Rose Gold Pendant Set',
    off:'20% Off',
    price:'2879.00',
  },
];

  return (
    <View style={responsiveStyle.container}>
      <View style={responsiveStyle.productView}>
        <Image
          source={require('../../assets/images/new-product-footwear.jpg')}
          style={responsiveStyle.productImage}
        />
        <View style={responsiveStyle.secondView}>
          <Text style={responsiveStyle.title} numberOfLines={2}>
            Flat Sandals
          </Text>
          <Text style={responsiveStyle.desc} numberOfLines={2}>
            Pink Light Weight Flats
          </Text>
          <View style={responsiveStyle.bottomView}>
            <Text style={responsiveStyle.title}>599.00</Text>
            <View style={responsiveStyle.offView}>
              <Text style={responsiveStyle.offText}>30% Off</Text>
            </View>
            <View style={responsiveStyle.cartView}>
              <Text style={responsiveStyle.cartText}>Add to Cart</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wishlist;
