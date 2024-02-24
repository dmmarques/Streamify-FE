import { GET_ALL_MOVIES, GET_MOVIE, CLEAR_MOVIES } from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case GET_MOVIE:
            return null;
        case CLEAR_MOVIES:
            return {
                ...state,
                movies: [],
            };
        default:
            return state;
    }
};
