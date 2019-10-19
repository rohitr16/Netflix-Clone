import { combineReducers } from 'redux';
import showDetailsReducer from './showDetailsReducer';
import showListReducer from './showListReducer';

export default combineReducers({
    showDetails: showDetailsReducer,
    showList: showListReducer
});