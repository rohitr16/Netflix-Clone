import axios from 'axios';
import {apikey} from '../apiKey';
import ActionTypes from './ActionTypes'

export const fetchShowList = (shows) => dispatch => {
    dispatch({ type: ActionTypes.GET_SHOW_LIST, payload: {shows, searchResults: shows} });
};

export const filterSearchItem = (value = '', list) => dispatch => {
    let searchResults = list.filter((item) => {
        const title = item.title.toUpperCase();
        return title.search(value) >=0 || title.search(value.toUpperCase()) >= 0;
    });

    if (value.length === 0) {
        searchResults = list;
    }

    dispatch({ type: ActionTypes.SET_SEARCH_RESULT, payload: searchResults });
}

export const getIMDBData = (showDetailsJSON, history) => async dispatch => {
    const {imdbID} = showDetailsJSON;
    const params = {
        i: imdbID,
        apikey
    }
    const res = await axios.get('http://www.omdbapi.com/', {params});
    dispatch({ type: ActionTypes.GET_IMDB_DATA, payload: {...res.data, ...showDetailsJSON} });

    history.push('/showDetails');
};

export const clearDetails = () => dispatch => {
    dispatch({ type: ActionTypes.CLEAR_DETAILS_DATA });
}

