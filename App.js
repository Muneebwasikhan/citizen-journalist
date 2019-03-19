import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import RouterFlux from './router/RouterFlux';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      
      <RouterFlux />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
