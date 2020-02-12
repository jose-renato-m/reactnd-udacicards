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

export async function setLocalNotification() {
    const json = await AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
    const data = JSON.parse(json)

    if (data === null) {
        const status = await Permissions.askAsync(Permissions.NOTIFICATIONS)

        if (status === 'granted') {
            await Notifications.cancelAllScheduledNotificationsAsync()

            const tommorrow = getTomorrowAt8pm()

            Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                    time: tomorrow,
                    repeat: 'day'
                }
            )

            AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
        }
    }
}