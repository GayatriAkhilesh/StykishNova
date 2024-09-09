import React from 'react';
import style from './style';
import {ScrollView, Text, View} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
import CustomSearch from '../../components/CustomSearch';
import Banner from '../../components/Banner';
import RecentBought from './components/RecentBought';
import ShowCategory from './components/ShowCategory';
import ProductScroll from '../../components/ProductScroll';
import OfferProducts from '../../components/OfferProducts';

const Home = () => {
  return (
    <View style={style.main}>
      <CommonHeader />
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Banner />
        <RecentBought />
        <ShowCategory />
        <ProductScroll/>
        <OfferProducts/>

        <Text style={style.footText}>Didn't find what you are looking for ? </Text>

        <View style={style.footButton}>
          <Text style={style.footButtonText}>Browse by Category</Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;
