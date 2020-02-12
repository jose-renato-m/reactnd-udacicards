import React, { Component } from 'react'
import { addCard } from '../actions/index'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { textColor } from '../utils/colors'
import { robotoMedium } from '../utils/fonts'

class AddCard extends Component {

    state = {
        question: '',
        answer: '',
        showQuestionRequiredError: false,
        showAnswerRequiredError: false,
    }

    resetState = () => {
        this.setState({
            question: '',
            answer: '',
            showQuestionRequiredError: false,
            showAnswerRequiredError: false,
        })
    }

    onSubmit = () => {

        const { addCard, goBack } = this.props
        const { question, answer } = this.state
        const questionNoWhitespace = question.replace(/\s/g, '')
        const answerNoWhitespace = answer.replace(/\s/g, '')

        let validationFailed = false

        if (!questionNoWhitespace.length) {
            this.setState({ showQuestionRequiredError: true })
            validationFailed = true
        } else {
            this.setState({ showQuestionRequiredError: false })
        }

        if (!answerNoWhitespace.length) {
            this.setState({ showAnswerRequiredError: true })
            validationFailed = true
        } else {
            this.setState({ showAnswerRequiredError: false }) 
        }

        if (validationFailed) {
            return
        }

        addCard(question, answer)
        goBack()

        this.resetState()
    }
}

export default connect()(AddCard)