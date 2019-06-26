/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartViewScreen from './screens/CartViewScreen';
import { Icon } from 'react-native-elements';
import CheckoutScreen from './screens/CheckoutScreen';
import SettingScreen from './screens/SettingScreen';
import { localize, LOCALE } from './utils/locale';
import {observer, Provider} from 'mobx-react'
import UserStore from './datastore/UserStore';
import DrawerMenu from './components/DrawerMenu';

console.disableYellowBox = true;

const defaultNavigationStyle = ({navigation})=>{
  return {
    headerStyle:{backgroundColor:'blue'},
    headerBackTitleStyle:{color:'white'},
    headerTitleStyle:{color:'white'},
    headerTintColor: 'white',
    headerRight:<TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon  name='menu' color='white' containerStyle={{padding:10}}/>
      </TouchableOpacity>
  }
}

const ProductStack = createStackNavigator({
  ProductListScreen:{screen:ProductListScreen},
  ProductDetailScreen:{screen:ProductDetailScreen},
},{
  defaultNavigationOptions:defaultNavigationStyle,
})

ProductStack.navigationOptions = {
  drawerLabel:()=>localize(LOCALE.PRODUCT_LIST)
}

const CartStack = createStackNavigator({
  CartViewScreen:{screen:CartViewScreen},
  CheckoutScreen:{screen:CheckoutScreen}
},{
  defaultNavigationOptions:defaultNavigationStyle
})

CartStack.navigationOptions = {
  drawerLabel:()=>localize(LOCALE.CART)
}

const SettingStack = createStackNavigator({
  SettingScreen:{screen:SettingScreen},
},{
  defaultNavigationOptions:defaultNavigationStyle,
})

SettingStack.navigationOptions = {
  drawerLabel:()=>localize(LOCALE.SETTING),
}

const DrawerNavigation = createDrawerNavigator({
  ProductStack:ProductStack,
  CartStack:CartStack,
  SettingStack:SettingStack
},{
  contentComponent:DrawerMenu
})

const SwitchNavigation = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  MainStack:DrawerNavigation
})


const AppContainer = createAppContainer(SwitchNavigation)

@observer
export default class App extends React.Component {
  async componentDidMount(){

  }

  render() {
    UserStore.locale
    return <Provider>
        <AppContainer/>
      </Provider>
  }
}