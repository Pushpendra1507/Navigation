import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image, StatusBar, Platform} from 'react-native'

import {TabNavigator, StackNavigator, createDrawerNavigator, createStackNavigator, createAppContainer,} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

// import FriendsListScreen from './FriendListScreen'
// import ChatListScreen from './ChatListScreen'
// import ChatScreen from './ChatScreen'
// import LoginScreen from './LoginScreen'
// import SettingScreen from './SettingScreen'
// import UserProfileScreen from './UserProfileScreen'
// import AdvancedScreen from './AdvancedScreen'


import HomeDrawer from './screen/HomeDrawer'
import Notification from './screen/Notification'
import Profile from './screen/Profile'
import Setting from './screen/Setting';
import CommonHeader from './common/Header'
import HomeTabBar from './screen/HomeTabBar';

//Tab

const AppNavigator = createStackNavigator({
    Home:{screen: HomeDrawer},
    Notification:{screen: Notification},
    Profile:{screen: Profile},
    Setting:{screen: Setting},
    // const AppContainer = createAppContainer(AppNavigator);
},
{
     //  headerMode: "none"
    // tabBarOptions:{
    //     activeTintColor:'#4d3241',
    //     style:{backgroundColor: Platform.select({ios:'white', android:'#4d3241'}), 
    //     borderTopColor: 'transparent', 
    //     borderTopWidth: 0,
    //     elevation: 0},
    //     labelStyle:{color:Platform.select({ios:null, android:'#fff'})},
    //     indicatorStyle:{backgroundColor:'#fff'},
       
    // }
})

const appDrawer = createDrawerNavigator({
    Home:{screen: HomeDrawer}, 
    Notification:{screen: Notification},
    Profile:{screen: Profile},
    Setting:{screen: Setting},
     
})
const AppContainer = createAppContainer(appDrawer); 

export default class Navigation extends React.Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}

