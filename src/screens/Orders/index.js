import React, {useEffect, useState} from 'react';
import style from './style';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {useDimensionContext} from '../../context';
import CustomSearch from '../../components/CustomSearch';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const Orders = () => {
  const navigation = useNavigation();
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const [ordersArray, setOrdersArray] = useState([]);
  const userId = useSelector(state => state.userId);

  useEffect(() => {
    getOrders();
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const getOrders = async () => {
    await firestore()
      .collection('Orders')
      .where('userId', '==', userId)
      .get()
      .then(snapShot => {

        if (snapShot.empty) {
          setOrdersArray([]);
        } else {

          const objArray = [];
          snapShot?.docs.forEach(document => {
            if (document.exists) {
              const result = {id: document.id, ...document?.data()};
              objArray.push(result);
            }
          });
          setOrdersArray(objArray);
        }
      });
  };

  const handleSearch = async text => {
    await firestore()
      .collection('Orders')
      .where('userId', '==', userId)
      .orderBy('orderId')
      .startAt(String(text))
      .endAt(String(text) + '\uf8ff')
      .get()
      .then(snapShot => {
        if (snapShot.empty) {
          setOrdersArray([]);
        } else {
          const objArray = [];
          snapShot?.docs.forEach(document => {
            if (document.exists) {
              const result = {id: document.id, ...document?.data()};
              objArray.push(result);
            }
          });
          setOrdersArray(objArray);
        }
      });
  };

  const navigateToDetails = item => {
    navigation.navigate('OrderDetails', {item:item});
  };

  return (
    <View style={responsiveStyle.container}>
      <CustomSearch
        filter={true}
        placeholder={'Search using your order Id'}
        mike={false}
        onChangeText={handleSearch}
      />
      <FlatList
        data={ordersArray}
        extraData={ordersArray}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 75}}
        ListEmptyComponent={() => {
          return (
            <View style={responsiveStyle.emptyView}>
              <Text style={responsiveStyle.emptyText}>
                You haven't ordered anything yet!
              </Text>
            </View>
          );
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>navigateToDetails(item)}
              style={responsiveStyle.flatView}>
              <View style={responsiveStyle.innerView}>
                <View>
                  <Text style={responsiveStyle.orderId}>
                    ID: {item.orderId}
                  </Text>
                  <Text style={responsiveStyle.orderedText}>
                    Ordered on:{item.created}
                  </Text>
                  <Text style={responsiveStyle.address}>{item.address1}</Text>
                  <Text style={responsiveStyle.address}>{item.address2}</Text>
                  <Text style={responsiveStyle.paidText}>
                    Paid:{' '}
                    <Text style={responsiveStyle.pinkText}>
                      {item.totalAmount}
                    </Text>
                    Items:{' '}
                    <Text style={responsiveStyle.pinkText}>
                      {item.cartItems.length}
                    </Text>
                  </Text>
                </View>
                <Image
                  source={require('../../assets/images/map-image.png')}
                  style={responsiveStyle.mapImage}
                />
              </View>
              <View style={responsiveStyle.bottomView}>
                <Text style={responsiveStyle.bottomText}>Order Shipped</Text>
                <Text style={responsiveStyle.bottomText}>
                  Rate & Review Products
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default Orders;
