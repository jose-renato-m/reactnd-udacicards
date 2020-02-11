import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { robotoMedium, robotoRegular } from '../utils/fonts'
import { textColor, white } from '../utils/colors'


class Question extends Component {

    state = {
        showAnswerArea: false
    }

    handleShowAnswerPress = () => {
        this.setState({ showAnswerArea: true })
    }

    handleQuestionAnswered = (answeredCorrectly) => {
        const { onQuestionAnswered } = this.props

        this.setState({ showAnswerArea: false })

        onQuestionAnswered(answeredCorrectly)
    }

    render() {

        const { questionObject } = this.props

        return (
            
        )
    }
}

export default Question