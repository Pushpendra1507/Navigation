import React from 'react'
import {Platform} from 'react-native'
import App from '../App'
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation'

const tab = createSwitchNavigator({
    navigation: {screen: App()}
})
export default createAppContainer(tab)
