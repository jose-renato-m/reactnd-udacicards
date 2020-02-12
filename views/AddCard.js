import React, { Component } from 'react'
import { addCard } from '../actions/index'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { textColor } from '../utils/colors'
import { robotoMedium } from '../utils/fonts'

class AddCard extends Component {

}

export default connect()(AddCard)