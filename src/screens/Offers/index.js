import React, {useEffect} from 'react';
import style from './style';
import {FlatList, ScrollView, Text, View} from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import {useDimensionContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const Offers = () => {
  const dimensions = useDimensionContext();
  const navigation = useNavigation();

  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );

  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft />,
    });
  }, []);

  const OffersArray = [
    {
      offer: '41',
      head: 'Midnight Sale Offer',
      content: 'On orders above Rs.999',
      code: 'TY67HB',
    },
    {
      offer: '50',
      head: 'Mansoon  Offer',
      content: 'On orders above Rs.1499',
      code: 'HUB75G',
    },
    {
      offer: '20',
      head: 'Pink Sale Offer',
      content: 'On orders above Rs.499',
      code: 'JIU85D',
    },
    {
      offer: '65',
      head: ' Onam Sale Offer',
      content: 'On orders above Rs.2499',
      code: 'JSW457',
    },
    {
      offer: '75',
      head: 'Eid Sale Offer',
      content: 'On orders above Rs.2999',
      code: 'HSP094',
    },
    {
      offer: '80',
      head: 'New year  Offer',
      content: 'On orders above Rs.3999',
      code: 'APVB38',
    },
  ];
  return (
    <View style={responsiveStyle.main}>
      <ScrollView
        style={responsiveStyle.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />

        <FlatList
          data={OffersArray}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={responsiveStyle.contentStyle}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => {
            return (
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
                      {item.offer}
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
                          fontSize: 14,
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
                        {item.head}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          color: '#000',
                          fontSize: 12,
                        }}>
                        {item.content}
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
                      {item.code}
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
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Offers;
