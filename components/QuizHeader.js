import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image } from 'react-native'
import { white, bgBlueLight } from '../utils/colors'
import { robotoMedium } from '../utils/fonts'

export default function QuizHeader(props) {

    return (
        <View style={styles.headerPanel}>

            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>quiz Time!</Text>
                <Text style={styles.countText}>
                    { props.currentQuestionIndex + 1 } / { props.totalQuestions }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerPanel: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        height: 130,
        borderRadius: 10,
        backgroundColor: bgBlueLight,
    },
    headerTextContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    headerText: {
        color: white,
        fontFamily: robotoMedium,
        fontSize: 32,
    },
    countText: {
        marginTop: 24,
        fontSize: 26,
        fontFamily: robotoMedium,
        color: white,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
})