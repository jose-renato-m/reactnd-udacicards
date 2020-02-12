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

export default class App extends Component {

  store = createStore(reducer, middleware)

  state = {
    prerequisitesLoaded: false
  }

  
}
