import ActionTypes from '../actions/ActionTypes';

export default function(state = {}, action = {}) {
    let newState = {};
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_SHOW_LIST:
            newState = payload;
            break;
        case ActionTypes.SET_SEARCH_RESULT:
            newState = {...state, searchResults: payload};
            break;
        case ActionTypes.CLEAR_DETAILS_DATA:
            newState = {...state, searchResults: state.shows};
            break;
        default:
            newState = state;
    }
    return newState;
};
