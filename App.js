/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, } from 'react-native'
import { createBottomTabNavigator, createAppContainer, TabNavigator , createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'; 
import HomeTabBar from './src/screen/HomeTabBar';
import Notification from './src/screen/Notification';
import Profile from './src/screen/Profile';
import Setting from './src/screen/Setting';
import Navigation from './src/Navigation';

//export default Navigation

const Tab = createMaterialTopTabNavigator({
  Home: {
    screen: HomeTabBar
  },
  Notification: {
    screen: Notification
  },
  Profile: {
    screen: Profile
  },
  Setting: {
    screen: Setting
  },    
}, {
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: 'gray',
    style: {
        backgroundColor: '#fff',
    },
    indicatorStyle: {
        backgroundColor: '#000',
    },
}


})

export default App = () => {
  return createStackNavigator ({
    Tab: { screen: Tab }
  }
  )
}