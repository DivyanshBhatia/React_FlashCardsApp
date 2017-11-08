import { AsyncStorage } from 'react-native'
import { CALENDAR_STORAGE_KEY,DECKS_STORAGE_KEY } from './storageKeys'

export function submitDeck ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function fetchAllDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return data
  })
}