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

    onQuestionChange = (value) => {
        this.setState({ question: value })
    }

    onAnswerChange = (value) => {
        this.setState({ answer: value })
    }

    render() {
        return (
            <View style={{flex:1}}>

                <View style={globalStyles.viewContainer}>

                    <Text style={globalStyles.title}>Add Card</Text>                    
                </View>
            </View>
        )
    }
}

export default connect()(AddCard)

const styles = StyleSheet.create({
    tagline: {
        color: textColor,
        fontSize: 16,
    },
    label: {
        marginTop: 32,
        marginBottom: 4,
        fontSize: 16,
        fontFamily: robotoMedium,
    },
})