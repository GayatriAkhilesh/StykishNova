import React, {useCallback, useEffect, useState} from 'react';
import style from './style';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDimensionContext} from '../../context';
import OrderTotal from './components/OrderTotal';
import CommonButton from '../../components/CommonButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {updateCartCount} from '../../storage/action';
import Snackbar from 'react-native-snackbar';

const Cart = () => {
  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const {userId, cartCount, email, mobilenumber} = useSelector(state => state);
  const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [charges, setCharges] = useState(50);

  useFocusEffect(
    useCallback(() => {
      getCartProducts();
    }, []),
  );

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCharges(50);
    } else {
      setCharges(0);
    }
  }, [cartProducts]);

  const getCartProducts = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('Its empty');
        } else {
          const result = [];
          let totalAmount = 0;
          snapshot.docs.forEach(doc => {
            if (doc.exists) {
              const amount =
                parseFloat(doc?.data().price) * parseInt(doc?.data().quantity);
              totalAmount = totalAmount + amount;
              const responseData = {id: doc.id, ...doc?.data()};
              result.push(responseData);
            }
          });
          setTotal(totalAmount);
          setCartProducts(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const updateArray = productInfo => {
    const result = cartProducts.filter(x => {
      return x.id !== productInfo.id;
    });
    setTotal(total - parseFloat(productInfo.price));

    setCartProducts(result);
    dispatch(updateCartCount(cartCount - 1));
  };

  const handleTotal = (type, productInfo) => {
    if (type === 'add') {
      setTotal(total + parseFloat(productInfo.price));
    } else {
      setTotal(total - parseFloat(productInfo.price));
    }
  };

  const onButtonPress = () => {
    if (cartProducts.length > 0) {
      if (email === '' || mobilenumber === '') {
        Snackbar.show({
          text: 'You have to complete your profile to continue.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#d20a2e',
          textColor: 'white',
        });
        navigation.navigate('Account');
      } else {
        navigation.navigate('AddAddress', {
          cartProducts: cartProducts,
          total: parseFloat(total + charges).toFixed(2),
        });
      }
    } else {
      Snackbar.show({
        text: 'Add items to proceed!',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#d20a2e',
        textColor: 'white',
      });
    }
  };

  return (
    <View style={responsiveStyle.container}>
      <FlatList
        data={cartProducts}
        extraData={cartProducts}
        renderItem={({item, index}) => {
          return (
            <RenderItem
              item={item}
              index={index}
              updateArray={updateArray}
              userId={userId}
              handleTotal={handleTotal}
            />
          );
        }}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{paddingBottom: 150}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <View style={responsiveStyle.emptyView}>
              <Image
                source={require('../../assets/images/image-empty-cart.png')}
              />
              <Text style={responsiveStyle.emptyText}>
                Your cart is empty! Add items to your cart and get exciting
                offers.
              </Text>
              <TouchableOpacity>
                <Text>Explore shopping</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        ListFooterComponent={() => {
          return (
            <>
              <View style={responsiveStyle.renderView}>
                {/* startcode */}
                <View style={responsiveStyle.offCircleView}>
                  <View style={responsiveStyle.circleRight}></View>
                  <View style={responsiveStyle.circleRight}></View>
                  <View style={responsiveStyle.circleRight}></View>
                  <View style={responsiveStyle.circleRight}></View>
                </View>

                <View
                  style={{
                    width: '67%',
                    height: 100,
                    backgroundColor: '#f5ced7',
                    padding: 20,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        color: '#48301f',
                        fontSize: 40,
                        marginTop: -7,
                        marginLeft: -4,
                      }}>
                      20
                    </Text>
                    <View>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: '#48301f',
                          fontSize: 14,
                          marginTop: 10,
                        }}>
                        %
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: '#48301f',
                          fontSize: 12,
                        }}>
                        OFF
                      </Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          color: '#000',
                          fontSize: 16,
                        }}>
                        On your first Order
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: '#000',
                          fontSize: 12,
                        }}>
                        For Order Above 2500 Rupees only
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    height: 100,
                    backgroundColor: '#f5ced7',
                  }}>
                  <View style={responsiveStyle.circleCenter}></View>
                  <View
                    style={[
                      responsiveStyle.circleCenter,
                      {marginBottom: -25 / 2},
                    ]}></View>
                </View>
                <View
                  style={{
                    width: '25%',
                    height: 100,
                    backgroundColor: '#f5ced7',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: '#000',
                      fontSize: 13,
                      marginRight: 3,
                    }}>
                    Use Code
                  </Text>
                  <View
                    style={{
                      marginVertical: 10,
                      padding: 5,
                      justifyContent: 'center',
                      borderRadius: 15,
                      backgroundColor: '#48301f',
                      overflow: 'hidden',
                      marginRight: 7,
                      marginLeft: -5,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        color: '#fff',
                        alignSelf: 'center',
                      }}>
                      J3O5B7
                    </Text>
                  </View>
                </View>
                {/* end code */}
                <View style={{marginLeft: -25 / 2}}>
                  <View style={responsiveStyle.circleRight}></View>
                  <View style={responsiveStyle.circleRight}></View>
                  <View style={responsiveStyle.circleRight}></View>
                  <View style={responsiveStyle.circleRight}></View>
                </View>
              </View>
              <OrderTotal total={total} charges={charges} />
              <CommonButton
                buttonText={'Proceed to Checkout'}
                onButtonPress={onButtonPress}
              />
            </>
          );
        }}
      />
    </View>
  );
};

const RenderItem = ({item, index, updateArray, handleTotal}) => {
  console.log('ittteeemmmm', item);

  const dimensions = useDimensionContext();
  const navigation = useNavigation();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const {userId} = useSelector(state => state);
  const [qun, setQun] = useState(item.quantity);

  useEffect(() => {
    setQun(item.quantity);
  }, [item]);

  const addToCart = async () => {
    await firestore()
      .collection('Cart')
      .where('userId', '==', userId)
      .where('productId', '==', item.productId)
      .get()
      .then(snapshot => {
        firestore()
          .collection('Cart')
          .doc(snapshot?.docs[0].id)
          .update({
            quantity: parseInt(snapshot?.docs[0].data().quantity, 10) + 1,
          });
        handleTotal('add', item);
      });
  };

  const removeItem = async () => {
    if (qun <= 1) {
      //remove from cart
      await firestore()
        .collection('Cart')
        .doc(item.id)
        .delete()
        .then(() => {
          updateArray(item);
        });
    } else {
      //update qun
      setQun(qun - 1);
      firestore()
        .collection('Cart')
        .doc(item.id)
        .update({
          quantity: parseInt(item.quantity, 10) - 1,
        });
      handleTotal('minus', item);
    }
  };

  const redirectToProductDetails = () => {
    navigation.navigate('ProductDetails', {product: item});
  };

  return (
    <TouchableOpacity
      onPress={redirectToProductDetails}
      style={responsiveStyle.productView}>
      <Image source={{uri: item.image}} style={responsiveStyle.productImage} />
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
              <Text style={responsiveStyle.offText}>20%</Text>
            </View>
          </View>
          <View style={responsiveStyle.quantityView}>
            <TouchableOpacity onPress={removeItem}>
              <Text style={responsiveStyle.quantityText1}>-</Text>
            </TouchableOpacity>
            <Text style={responsiveStyle.quantityText2}>{qun}</Text>
            <TouchableOpacity
              onPress={() => {
                setQun(qun + 1);
                addToCart();
              }}>
              <Text style={responsiveStyle.quantityText1}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cart;
