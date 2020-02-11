import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { textColor } from '../utils/colors'
import { robotoMedium } from '../utils/fonts'
import CustomStatusBar from '../components/CustomStatusBar'
import { addDeck } from '../actions/index'

class AddDeck extends Component {
    
}

export default connect()(AddDeck)