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
            <View>

                <Text style={globalStyles.title}>Question</Text>
                <Text style={StyleSheet.largeText}>{ questionObject.question }</Text>

                {!this.state.showAnswerArea && (
                    <View>
                        
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    largeText: {
        marginTop: 8,
        marginBottom: 20,
        fontSize: 20,
        fontFamily: robotoMedium,
        color: textColor,
    },
    smallText: {
        marginTop: 8,
        marginBottom: 20,
        fontSize: 16,
        fontFamily: robotoRegular,
        color: textColor,
    },
    heading: {
        marginTop: 8,
        fontSize: 32,
        fontFamily: robotoMedium,
        color: textColor,
    },
    btnSuccess: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#28A745',
    },
    btnError: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#DC3545',
    },
    btnSuccessText: {
        color: white,
        fontSize: 14,
        fontFamily: robotoMedium,
        textTransform: 'uppercase',
    },
    btnErrorText: {
        color: white,
        fontSize: 14,
        fontFamily: robotoMedium,
        textTransform: 'uppercase'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
})

export default Question