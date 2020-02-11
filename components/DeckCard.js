import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { bgGreen, white } from '../utils/colors'
import { robotoMedium, robotoRegular } from '../utils/fonts'
import NavigationService from '../navigation/navigationService'
import thunk from 'redux-thunk'

class DeckCard extends Component {

    state = {
        scaleValue: new Animated.Value(1)
    }

    handleDeckPress = () => {
        const { deck } = this.props
        const { scaleValue } = this.state

        Animated.sequence([
            Animated.timing(scaleValue, { duration: 125, toValue: 0.96 }),
            Animated.timing(scaleValue, { duration: 125, toValue: 1 }),
        ]).start(() => {
            NavigationService.navigate('Deck', {
               deckId: deck.id 
            })
        })
    }

    render() {

        const { deck, allowNavigation } = this.props
        const { scaleValue } = this.state
        const cardCount = deck.questions.length

        return (

            
        )
    }
}

class DeckCard extends Component {

}

export default DeckCard