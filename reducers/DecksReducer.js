import {ADD_DECK_ENTRY,RECEIVE_ENTRIES} from '../actions/types'

const DecksReducer = (state={},action)=>{
	const {type,payload} = action
	switch(type){
		case ADD_DECK_ENTRY:
		case RECEIVE_ENTRIES:
			return {
				...state,...payload
			}
		default:
			return state
	}
}

export default DecksReducer