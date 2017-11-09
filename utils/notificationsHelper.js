import {NOTIFICATION_STORAGE_KEY} from './storageKeys'
import { AsyncStorage } from 'react-native'
import {Notifications,Permissions} from 'expo'

//Some part Notifications code is borrowed from the in class udacity fitness app taught by tyler during react nanodegree program
export function clearLocalNotifications(){
	return AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
	.then(Notifications.cancelAllScheduledNotificationAsync)
}

function createNotification(){
	return {
		title:'Take a Quiz today!!',
		body:"don't forget to take a quiz today",
		ios:{
			sound:true
		},
		android:{
			sound:true,
			sticky:false,
			vibrate:true,
		}

	}
}

export function setLocalNotification(){
	AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
	.then(JSON.parse)
	.then((data) => {
		if(data===null){
			Permissions.askAsync(Permissions.NOTIFICATIONS)
			.then(({status})=> {
				if(status === 'granted'){
					Notifications.cancelAllScheduledNotificationsAsync()
					let tomorrow = new Date()
					tomorrow.setDate(tomorrow.getDate()+1)
					tomorrow.setHours(20)
					tomorrow.setMinutes(0)
					Notifications.scheduleLocalNotificationAsync(
						createNotification(),
						{
							time:tomorrow,
							repeat:'day'
						}
					)
					AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY,JSON.stringify(true))
				}
			}
			)
		}
	})
}
