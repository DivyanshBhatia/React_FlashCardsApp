import {ADD_DECK_ENTRY,RECEIVE_ENTRIES} from './types'

export function addDeckEntry(data){
	return {
		type:ADD_DECK_ENTRY,
		payload:data,
	}
}

export function receiveEntries(data){
	console.log('data',data);
	return {
		type:RECEIVE_ENTRIES,
		payload:data,
	}
}