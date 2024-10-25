import {Image, View} from 'react-native';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../../assets/images/StylishNova-new-logo.png')}
        style={{width: 400, height: 700}}
        resizeMode="cover"
      />
    </View>
  );
};

export default Splash;
