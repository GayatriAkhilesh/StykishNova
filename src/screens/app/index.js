import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login';
import SignUp from '../SignUp';
import LoginPhone from '../LoginPhone';
import Home from '../Home';
import {DimensionContextProvider} from '../../context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Categories from '../Categories';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../Cart';
import CustomDrawer from '../../components/CustomDrawer';
import CustomFooter from '../../components/CustomFooter';
import Search from '../Search';
import Offers from '../Offers';
import Orders from '../Orders';
import Wishlist from '../Wishlist';
import Account from '../Account';
import style from './style';

const Drawer = createDrawerNavigator();
const AppDrawer = props => {
  return (
    <Drawer.Navigator
      initialRouteName="MyFooter"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle:style.title,
      }}>
      <Drawer.Screen
        name="MyFooter"
        component={AppFooter}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Category" component={Categories} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
};

const Footer = createBottomTabNavigator();
const AppFooter = () => {
  return (
    <Footer.Navigator
      tabBar={props => <CustomFooter {...props} />}
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: style.title,
      }}>
      <Footer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Footer.Screen name="Category" component={Categories} />
      <Footer.Screen name="Search" component={Search} />
      <Footer.Screen name="Offers" component={Offers} />
      <Footer.Screen name="Cart" component={Cart} />
    </Footer.Navigator>
  );
};

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <DimensionContextProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="AppDrawer" component={AppDrawer} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="LoginPhone" component={LoginPhone} />
        </AppStack.Navigator>
      </NavigationContainer>
    </DimensionContextProvider>
  );
};

export default App;
