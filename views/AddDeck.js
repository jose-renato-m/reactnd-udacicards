import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { textColor } from '../utils/colors'
import { robotoMedium } from '../utils/fonts'
import CustomStatusBar from '../components/CustomStatusBar'
import { addDeck } from '../actions/index'

class AddDeck extends Component {

    state = {
        title: '',
        showRequiredInputError: false,
        showUniqueNameError: false,
    }

    resetState = () => {
        this.setState({
            title: '',
            showRequiredInputError: false,
            showUniqueNameError: false,
        })
    }

    onSubmit = () => {

        const { decks, addDeck, goToDecks } = this.props
        const { title } = this.state

        const titleNoWhitespace = title.replace(/\s/g, '')

        if (!titleNoWhitespace.length) {
            this.setState({ showRequiredInputError: true, showUniqueNameError: false })
            return
        }

        const titleAlreadyUsed = Object.keys(decks).some((key) => {
            const deck = decks[key]
            return deck.title === title
        })

        if (titleAlreadyUsed) {
            this.setState({ showRequiredInputError: false, showUniqueNameError: true })
            return
        }

        addDeck(title)
        goToDecks()

        this.resetState()
    }

    onTitleChange = (value) => {
        this.setState({ title: value })
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <CustomStatusBar />

                <View style={globalStyles.viewContainer}>
                    <Text style={globalStyles.title}>Add Deck</Text>
                    <Text style={styles.tagline}>Create a new deck of flashcards</Text>   

                    <Text style={styles.label}>Title</Text>
                    <TextInput value={this.state.title} onChangeText={this.onTitleChange} style={globalStyles.textInput} />


                    {this.state.showRequiredInputError && (
                        <Text style={globalStyles.inputErrorText}>Please enter a title</Text>
                    )}

                    {this.state.showUniqueNameError && (
                        <Text style={globalStyles.inputErrorText}>This title has already been used</Text>
                    )}
                </View>
            </View>
        )
    }
}

export default connect()(AddDeck)

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