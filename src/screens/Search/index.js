import React from 'react';
import style from './style';
import {ScrollView, View} from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import OfferProducts from '../../components/OfferProducts';
import Trending from './components/Trending';

const Search = () => {
  return (
    <View style={style.main}>
      <ScrollView
        style={style.container}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <CustomSearch />
        <Trending/>
        <OfferProducts/>
      </ScrollView>
    </View>
  );
};

export default Search;
