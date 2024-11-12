import React, {useCallback, useEffect, useState} from 'react';
import style from './style';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDimensionContext} from '../../context';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useDispatch, useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {updateCartCount} from '../../storage/action';

const Wishlist = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userId);
  const  cartCount = useSelector(state => state.cartCount);
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const [wishItems, setWishItems] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getWishList();
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity>
            <View style={responsiveStyle.cartCount}>
              <Text style={responsiveStyle.count}>{cartCount}</Text>
            </View>
            <Image
              source={require('../../assets/images/wishlist-cart.png')}
              style={responsiveStyle.cartIcon}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => <CommonHeaderLeft />,
      });
    }, [cartCount]),
  );

  const getWishList = async () => {
    await firestore()
      .collection('Wishlist')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          setWishItems([]);
        } else {
          const objArray = [];
          snapshot?.docs.forEach(document => {
            const result = {id: document.id, ...document?.data()};
            objArray.push(result);
          });
          setWishItems(objArray);
        }
      });
  };

  const addToCart = async itemToAdd => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', itemToAdd.id)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          firestore()
            .collection('Cart')
            .add({
              created: '' + Date.now() + '',
              description: itemToAdd.description,
              name: itemToAdd.name,
              price: itemToAdd.price,
              quantity: 1,
              userId: userId,
              productId: itemToAdd.id,
              image: itemToAdd.image,
            });
          dispatch(updateCartCount(cartCount + 1));
        } else {
          firestore()
            .collection('Cart')
            .doc(snapshot?.docs[0].id)
            .update({
              quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
            });
        }
      });
  };
  const removeItem = async itemToRemove => {
    await firestore()
      .collection('Wishlist')
      .doc(itemToRemove.id)
      .delete()
      .then(() => {
        const filteredWishlist = wishItems.filter(
          ele => ele.id !== itemToRemove.id,
        );
        setWishItems(filteredWishlist);
      });
  };

  const navigateToShop = () => {
    navigation.navigate('Shop', {type: 'all'});
  };

  return (
    <View style={responsiveStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={responsiveStyle.emptyView}>
              <Text style={responsiveStyle.emptyText}>
                Your Wishlist is empty, add products you wish!
              </Text>
              <TouchableOpacity
                onPress={navigateToShop}
                style={responsiveStyle.buttonView}>
                <Text style={responsiveStyle.wishButton}>
                  Start your Shopping here
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        data={wishItems}
        renderItem={({item, index}) => {
          return (
            <View style={responsiveStyle.productView}>
              <Image
                source={{uri: item.image}}
                style={responsiveStyle.productImage}
              />
              <View style={responsiveStyle.secondView}>
                <Text style={responsiveStyle.title} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text style={responsiveStyle.desc} numberOfLines={2}>
                  {item.description}
                </Text>
                <View style={responsiveStyle.bottomView}>
                  <Text style={responsiveStyle.price}>₹ {item.price}</Text>

                  <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={responsiveStyle.cartView}>
                    <Text style={responsiveStyle.cartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => removeItem(item)}
                style={responsiveStyle.removeView}>
                <Image
                  source={require('../../assets/images/delete.png')}
                  style={responsiveStyle.remove}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
