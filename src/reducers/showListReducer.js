import ActionTypes from '../actions/ActionTypes';

const initialState = {
    shows: [],
    searchResults: [],
    searchKey: ''
}

export default function(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case ActionTypes.GET_SHOW_LIST:
            return {...state, shows:payload.shows, searchResults: payload.searchResults};
        case ActionTypes.SET_SEARCH_RESULT:
            return {...state, searchResults: payload};
        case ActionTypes.CLEAR_DETAILS_DATA:
            return {...state, searchResults: state.shows};
        case ActionTypes.SET_SEARCH_KEY:
            return {...state, searchKey: payload.value};
        default:
            return state;
    }
};
