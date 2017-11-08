import { combineReducers } from 'redux';
import DecksReducer from './DecksReducer';

const combineReducer = combineReducers({
	decks:DecksReducer,
});

export default combineReducer;