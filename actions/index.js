import {ADD_DECK_ENTRY,RECEIVE_ENTRIES,ADD_ACTIVE_DECK_ENTRY} from './types'

export function addDeckEntry(data){
	return {
		type:ADD_DECK_ENTRY,
		payload:data,
	}
}

export function receiveEntries(data){
	return {
		type:RECEIVE_ENTRIES,
		payload:data,
	}
}

export function addActiveDeckEntry(data){
	return {
		type:ADD_ACTIVE_DECK_ENTRY,
		payload:data,
	}
}