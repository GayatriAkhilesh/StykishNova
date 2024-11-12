import {Text, View} from 'react-native';
import {useDimensionContext} from '../../context';
import style from './style';
import {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CommonHeaderLeft from '../../components/CommonHeaderLeft';

const OrderDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const dimension = useDimensionContext();
  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CommonHeaderLeft type={'back'} />,
    });
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default OrderDetails;
