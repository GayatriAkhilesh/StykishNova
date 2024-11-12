import {ActivityIndicator, Modal, ScrollView, Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore, {doc} from '@react-native-firebase/firestore';
import CustomButton from '../../components/CustomButton';
import Snackbar from 'react-native-snackbar';

const OrderDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CommonHeaderLeft
          type={'back'}
          action={() => navigation.navigate('Orders')}
        />
      ),
      title: 'Order Summary',
    });
  }, []);

  const reOrder = async () => {
    try {
      setLoading(true);
      const smallId = Math.random();
      await firestore()
        .collection('Orders')
        .add({
          orderId: String(smallId).slice(4, 12).toUpperCase(),
          created: Date.now(),
          updated: Date.now(),
          orderStatus: 'Ordered',
          totalAmount: item.totalAmount,
          address: item.address,
          userId: item.userId,
          paymentMethod: 'Online',
          cartItems: item.cartItems,
          userName: item.userName,
          userEmail: item.userEmail,
          userPhone: item.userPhone,
          expDelDate: '',
        })
        .then(async res => {
          console.warn(res);
          if (res) {
            setTimeout(() => {
              Snackbar.show({
                text: 'Order placed successfully. ',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'green',
                textColor: 'white',
              });
              setLoading(false);
            }, 1000);
          }
        });
    } catch (error) {
      console.log('*********************************************');
      console.log(error);
      console.log('*********************************************');
    }
  };

  return (
    <View style={responsiveStyle.mainView}>
      <Modal animationType="fade" transparent={true} visible={loading}>
        <View style={responsiveStyle.activityIndi}>
          <ActivityIndicator size={'large'} color="#fff" />
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 125}}
        style={responsiveStyle.scrollView}>
        <View style={responsiveStyle.firstBox}>
          <View>
            <Feather name="box" size={55} color="#fff" />
          </View>
          <View style={responsiveStyle.txtView}>
            <Text style={responsiveStyle.orderId}>
              Order Id: #{item?.orderId ?? 'NSIUDCHHI'}
            </Text>
            <Text style={responsiveStyle.orderStatus}>
              {item?.orderStatus ?? ''}
            </Text>
          </View>
        </View>

        {/* ****************************************************** */}

        <View style={responsiveStyle.secondMainView}>
          <Text style={responsiveStyle.headTxt}>Items:</Text>
          {item?.cartItems &&
            item.cartItems.map((ele, index) => {
              return (
                <View key={index} style={responsiveStyle.disView}>
                  <View style={responsiveStyle.quaView}>
                    <Text style={responsiveStyle.quaText}>{ele.quantity}</Text>
                  </View>
                  {/* <MaterialCommunityIcons name="star-four-points-outline" size={30} color="#48301f" /> */}

                  <View style={responsiveStyle.inDisView}>
                    <Text style={responsiveStyle.nameTxt}>{ele.name}</Text>
                    <Text style={responsiveStyle.disText}>
                      {ele.description}
                    </Text>
                  </View>
                  <Text style={responsiveStyle.priceText}>₹ 2000.00</Text>
                </View>
              );
            })}
        </View>

        {/* ******************************************************************** */}

        <View style={responsiveStyle.thirdMainView}>
          <Text style={responsiveStyle.headTxt}>Payment Details</Text>
          <View style={responsiveStyle.thirdView}>
            <View>
              <Text style={responsiveStyle.thirdtexts}>Bag Total</Text>
              <Text style={responsiveStyle.thirdtexts}>Coupon Discount</Text>
              <Text style={responsiveStyle.thirdtexts}>Delivery</Text>
            </View>
            <View style={responsiveStyle.inThirdView}>
              <Text style={responsiveStyle.thirdtexts}>₹ 2763.00</Text>
              <Text style={responsiveStyle.couponTxt}>Apply Coupon</Text>
              <Text style={responsiveStyle.thirdtexts}>₹ 50.00</Text>
            </View>
          </View>
          <View style={responsiveStyle.totalAmtView}>
            <Text style={responsiveStyle.totalAmtText}>Total Amount</Text>
            <Text style={responsiveStyle.totalAmtText}>
              ₹ {item.totalAmount}
            </Text>
          </View>
        </View>

        {/* ******************************************************************** */}

        <View style={responsiveStyle.thirdMainView}>
          <Text style={responsiveStyle.headTxt}>Address:</Text>
          <Text style={responsiveStyle.thirdtexts}>Akhi dev</Text>
          <Text style={responsiveStyle.thirdtexts}>GA Apartments, 184,</Text>
          <Text style={responsiveStyle.thirdtexts}> AG.21. US, 754987</Text>
        </View>
        <View style={responsiveStyle.thirdMainView}>
          <Text style={responsiveStyle.headTxt}>Payment Method:</Text>
          <View style={responsiveStyle.card}>
            <FontAwesome5 name="credit-card" size={30} color="#000" />
            <View style={responsiveStyle.cardDetails}>
              <Text style={responsiveStyle.thirdtexts}>
                **** **** **** 1802
              </Text>
              <Text style={responsiveStyle.thirdtexts}>
                {item?.paymentMethod ?? ''}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={responsiveStyle.finalBtn}>
        <CustomButton
          type="primary"
          handleButtonPress={reOrder}
          buttonText={'Reorder'}
        />
      </View>
    </View>
  );
};

export default OrderDetails;
