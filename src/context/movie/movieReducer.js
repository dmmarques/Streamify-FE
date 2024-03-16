import { act } from 'react-dom/test-utils';
import { GET_ALL_MOVIES, GET_MOVIE, SET_LOADING, GET_MOVIES_BY_GENRE, GET_MOVIES_BY_RATING, GET_MOVIES_BY_YEAR, SET_API_ERROR, GET_MOVIE_DETAILS_BY_ID } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload,
                filteredMovies: null,
                loading: false,
                apiError: false,
            };
        case GET_MOVIE:
            return {
                ...state,
                filteredMovies: action.payload,
                loading: false,
                apiError: false,
            };
        case GET_MOVIES_BY_GENRE:
            return {
                ...state,
                filteredMovies: action.payload,
                loading: false,
                apiError: false,
            };
        case GET_MOVIES_BY_RATING:
            return {
                ...state,
                filteredMovies: action.payload,
                loading: false,
                apiError: false,
            };
        case GET_MOVIES_BY_YEAR:
            return {
                ...state,
                filteredMovies: action.payload,
                loading: false,
                apiError: false,
            };
        case GET_MOVIE_DETAILS_BY_ID:
            return {
                ...state,
                detailedMovie: action.payload,
                loading: false,
                apiError: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_API_ERROR:
            return {
                ...state,
                apiError: true,
            };
        default:
            return state;
    }
};
