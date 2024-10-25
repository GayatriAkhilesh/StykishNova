import {Image, View} from 'react-native';

const Splash = () => {
  return (
    <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
      <Image
        source={require('../../assets/images/STYLISH.png')}
        style={{width: '100%', height: '100%', resizeMode: "cover"}}
      />
    </View>
  );
};

export default Splash;