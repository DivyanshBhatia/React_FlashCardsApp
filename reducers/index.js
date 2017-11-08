import { combineReducers } from 'redux';
import DecksReducer from './DecksReducer';
import ActiveDeckReducer from './ActiveDeckReducer'

const combineReducer = combineReducers({
	decks:DecksReducer,
	activeDeck:ActiveDeckReducer,
});

export default combineReducer;