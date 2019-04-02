import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import globleStyle from '../common/style'
import CommonHeader from '../common/Header'


export default class Home extends Component {
  static navigationOptions = {
    headerTitle: "",
  };

myButtonAction = () => {
  this.props.navigation.navigate("Profile")
}

toggleDrawer = () => {
   this.props.navigation.toggleDrawer();
}

  render() {
    return (
      <View style={globleStyle.instructions}>
        <CommonHeader
          headerTitle  = "Home"
          toggleDrawer = {this.toggleDrawer}
          isShowButton = {true}
        />
       
      </View>
    )
  }
}