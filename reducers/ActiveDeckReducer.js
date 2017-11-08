import {ADD_ACTIVE_DECK_ENTRY} from '../actions/types'

const ActiveDeckReducer = (state={},action)=>{
	const {type,payload} = action
	switch(type){
		case ADD_ACTIVE_DECK_ENTRY:
			return {
				...payload
			}
		default:
			return state
	}
}

export default  ActiveDeckReducer