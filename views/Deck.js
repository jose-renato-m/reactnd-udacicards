import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/globalStyles'
import NavigationService from '../navigation/navigationService'

import DeckCard from '../components/DeckCard'

class Deck extends Component {

    state = {
        showNoQuestionsError: false
    }
}

export default connect()(Deck)