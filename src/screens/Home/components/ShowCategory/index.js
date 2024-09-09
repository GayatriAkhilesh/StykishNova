import {FlatList, Image, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import {useDimensionContext} from '../../../../context';
import {useEffect, useState} from 'react';

const ShowCategory = () => {
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.width, dimension.height);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await firestore()
      .collection('Categories')
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
          setCategories(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <View style={responsiveStyle.container}>
      <Text style={responsiveStyle.head}>Shop by Category</Text>
      <FlatList
        data={categories}
        numColumns={4}
        contentContainerStyle={responsiveStyle.flatList}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item, index}) => {
          return (
            <View style={responsiveStyle.innerView}>
              <View style={responsiveStyle.imageView}>
                <Image
                  style={responsiveStyle.image}
                  source={{uri: item.image}}
                />
              </View>
              <Text style={responsiveStyle.itemName}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ShowCategory;
