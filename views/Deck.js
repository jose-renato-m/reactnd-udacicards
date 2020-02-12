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

    handleStartQuiz = () => {

        const { deck, questionsCount } = this.props

        if (questionsCount === 0) {
            this.setState({ showNoQuestionsError: true })
        } else {
            NavigationService.navigate('Quiz', {
                deckId: deck.id
            })
        }
    }

    handleAddCard = () => {

        const { deck } = this.props

        this.setState({ showNoQuestionsError: false })

        NavigationService.navigate('AddCard', {
            deckId: deck.id
        })
        
    }
}

export default connect()(Deck)