import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { clearLocalNotification, setLocalNotification } from '../utils/notificationHelper'

import CustomStatusBar from '../components/CustomStatusBar'
import QuizHeader from '../components/QuizHeader'
import Question from '../components/Question'
import QuizResults from '../components/QuizResults'

class Quiz extends Component {

}

export default connect()(Quiz)