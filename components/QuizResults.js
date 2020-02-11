import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { robotoMedium } from '../utils/fonts'
import { textColor } from '../utils/colors'
import NavigationService from '../navigation/navigationService'

function QuizResults (props) {

    const { totalQuestions, questionsAnsweredCorrectly, onStartQuizAgain } = props
    const percentage = Math.round((100 / totalQuestions) * questionsAnsweredCorrectly)
    return (

    )
}

export default QuizResults