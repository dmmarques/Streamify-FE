import React, { useReducer } from 'react';
import axios from 'axios';
import MovieReducer from './movieReducer';
import MovieContext from './movieContext';
import { GET_ALL_MOVIES } from '../types';

const MovieState = (props) => {
    const initialState = {
        movies: [],
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    //GET ALL MOVIES
    const getAllMovies = async () => {
        const res = await axios.get(`http://localhost:8080/api/v1/streamify/movies`);
        dispatch({ type: GET_ALL_MOVIES, payload: res.data });
    };

    return <MovieContext.Provider value={{ movies: state.movies, getAllMovies }}>{props.children}</MovieContext.Provider>;
};

export default MovieState;
