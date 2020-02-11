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
        <View>
            <Text style={globalStyles.title}>Quiz Complete</Text>
            <Text style={styles.largeText}>
                You got { questionsAnsweredCorrectly } out of { totalQuestions } correct ({ percentage }%)
            </Text>

            <TouchableOpacity
                onPress={onStartQuizAgain}
                style={globalStyles.btnSecondary}>
                    <Text style={globalStyles.btnSecondaryText}>Start Quiz Again</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    largeText: {
        marginTop: 8,
        marginBottom: 20,
        fontSize: 20,
        fontFamily: robotoMedium,
        color: textColor,
    },
})

export default QuizResults