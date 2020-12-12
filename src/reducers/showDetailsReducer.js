import ActionTypes from '../actions/ActionTypes';

export default function(state = {}, action) {
    const payload = action.payload;
    let newState = {};
    switch (action.type) {
        case ActionTypes.GET_IMDB_DATA:
            newState =  {...state, ...payload.showDetails};
            break;
        case ActionTypes.CLEAR_DETAILS_DATA:
            newState = {};
            break;
        default:
            newState = state;
    }
    return newState;
}