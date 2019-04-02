import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CommonHeader from '../common/Header'

export default class Setting extends Component {
  static navigationOptions = {
    title: 'Settings'
  }
  render() {
    return (
      <View>
        <CommonHeader
          headerTitle = "Settings"
        />
      </View>
    )
  }
}