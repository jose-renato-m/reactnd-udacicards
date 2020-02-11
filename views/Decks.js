import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, ScrollView } from 'react-native'
import globalStyles from '../utils/globalStyles'

import CustomStatusBar from '../components/CustomStatusBar'
import HomeHeader from '../components/HomeHeader'
import DeckCard from '../components/DeckCard'

class Decks extends Component {

    render() {

        const { decksArray } = this.props

        return (
            <View style={{flex: 1}}>
                
            </View>
        )
    }
}

export default connect()(Decks)