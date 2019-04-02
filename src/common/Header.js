import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, } from 'react-native';
import { Header, Body, Title, Button } from 'native-base'
import globleStyle from './style'


const bodyHeight = Platform.OS === 'ios' ? 44 : 56

const commonHeader = props => {
  const {
    headerTitle,
    isShowButton,
    toggleDrawer,
    ...attribute
  } = props;
  return (
    <Header hasTabs style={{ backgroundColor: '#f4511e50', }}>
      <Body style={{ height: bodyHeight }}>
        {isShowButton &&
          <Button transparent style={{ alignSelf: 'flex-start', position: 'absolute', height: bodyHeight }}
            onPress={() => toggleDrawer()}>
            <Title>{" Left"}</Title>
          </Button>
        }

        <Title style={{ width: '80%', alignSelf: 'center' }}>{headerTitle}</Title>
        
        {isShowButton &&
          <Button transparent style={{ alignSelf: 'flex-end', position: 'absolute', height: bodyHeight }}
            onPress={() => toggleDrawer()} >
            <Title>{"Right"}</Title>
          </Button>
        }
      </Body>

    </Header>
  )
}
export default commonHeader