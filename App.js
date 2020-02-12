import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import middleware from './middleware/index'
import { receiveDecks } from './actions/index'
import * as Font from 'expo-font'
import { robotoMedium, robotoRegular } from './utils/fonts'
import NavigationService from './navigation/navigationService'
import { fetchAllDecks } from './utils/api'
import { setLocalNotification } from './utils/notificationHelper'

import StackNavigation from './navigation/StackNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
