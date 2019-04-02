import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CommonHeader from '../common/Header' 

export default class Profile extends Component{
  static navigationOptions = {
    title: 'Profile'
   }
  render() {
      return(
          <View>
                <CommonHeader
                 headerTitle = "Profile"
                />
          </View>
      )
  }
}