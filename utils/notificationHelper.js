import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_STORAGE_KEY = 'MobileFlashcards:Notification'

export async function clearLocalNotification() {
    await AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
    await Notifications.cancelAllScheduledNotificationsAsync()
}