import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'
import { func } from 'prop-types'

const NOTIFICATION_STORAGE_KEY = 'MobileFlashcards:Notification'

export async function clearLocalNotification() {
    await AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
    await Notifications.cancelAllScheduledNotificationsAsync()
}

export function createNotification() {
    return {
        title: 'Answer a quiz',
        body: '⏰ Don\'t forget to complete a quiz today',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}