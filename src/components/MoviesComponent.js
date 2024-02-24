import React, { useContext, useEffect } from 'react';
import MovieContext from '../context/movie/movieContext';

const MoviesComponent = () => {
    const movieContext = useContext(MovieContext);

    useEffect(() => {
        movieContext.getAllMovies();
    }, []);

    return <div>{movieContext.movies && movieContext.movies.map((mov) => <div>{mov.title}</div>)}</div>;
};

export default MoviesComponent;
