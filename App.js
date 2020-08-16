import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchScreen';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';

const navigator = createStackNavigator({
  SearchScreen: SearchScreen,
  ResultsShowScreen: ResultsShowScreen
}, {
  initialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: 'Search Screen'
  }
});

const styles = StyleSheet.create({});

export default createAppContainer(navigator);