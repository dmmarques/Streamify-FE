import React, { useReducer } from 'react';
import axios from 'axios';
import MovieReducer from './movieReducer';
import MovieContext from './movieContext';
import { GET_ALL_MOVIES, GET_MOVIE, GET_MOVIES_BY_GENRE, SET_LOADING, GET_MOVIES_BY_RATING, GET_MOVIES_BY_YEAR, SET_API_ERROR, GET_MOVIE_DETAILS_BY_ID } from '../types';

const MovieState = (props) => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const initialState = {
        movies: [],
        filteredMovies: null,
        loading: false,
        apiError: false,
        detailedMovie: {},
    };

    const [state, dispatch] = useReducer(MovieReducer, initialState);

    //GET ALL MOVIES
    const getAllMovies = async () => {
        setLoading();
        console.log('Fetching all movies');
        const res = await axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
            .then((response) => {
                setTimeout(function () {
                    dispatch({ type: GET_ALL_MOVIES, payload: response.data.results });
                }, 1000);
            })
            .catch(function (error) {
                setApiError();
            });
    };

    //GET MOVIE BY TITLE
    const getMovieByTitle = async (title) => {
        setLoading();
        console.log('Fetching movie by title');
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`).catch(function (error) {
            setApiError();
        });
        setTimeout(function () {
            dispatch({ type: GET_MOVIE, payload: res.data.results });
        }, 1000);
    };

    //GET MOVIE BY Genre
    const getMoviesByGenre = async (genre) => {
        setLoading();
        console.log('Fetching movies by genre');
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`);
        console.log(res.data);
        setTimeout(function () {
            dispatch({ type: GET_MOVIES_BY_GENRE, payload: res.data.results });
        }, 1000);
    };

    //GET MOVIE BY RATING
    const getMoviesByRating = async (rating) => {
        setLoading();
        console.log('Fetching movies by Rating');
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&vote_average.gte=${rating}`);
        setTimeout(function () {
            dispatch({ type: GET_MOVIES_BY_RATING, payload: res.data.results });
        }, 1000);
    };

    //GET MOVIE BY YEAR
    const getMoviesByYear = async (year) => {
        setLoading();
        console.log('Fetching movies by Year');
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&year=${year}`);
        setTimeout(function () {
            dispatch({ type: GET_MOVIES_BY_YEAR, payload: res.data.results });
        }, 1000);
    };

    //GET MOVIE DETAILS BY ID
    const getMovieDetailsById = async (id) => {
        setLoading();
        console.log('Fetching movie details by ID: ' + id);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
        setTimeout(function () {
            dispatch({ type: GET_MOVIE_DETAILS_BY_ID, payload: res.data });
        }, 1000);
    };

    //Set Loading
    const setLoading = () => {
        dispatch({ type: SET_LOADING });
    };

    //Set Loading
    const setApiError = () => {
        dispatch({ type: SET_API_ERROR });
    };

    http: return <MovieContext.Provider value={{ movies: state.movies, filteredMovies: state.filteredMovies, loading: state.loading, apiError: state.apiError, detailedMovie: state.detailedMovie, getAllMovies, getMovieByTitle, getMoviesByGenre, getMoviesByRating, getMoviesByYear, setApiError, getMovieDetailsById }}>{props.children}</MovieContext.Provider>;
};

export default MovieState;
