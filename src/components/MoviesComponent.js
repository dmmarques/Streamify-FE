import React, { useContext, useEffect } from 'react';
import MovieContext from '../context/movie/movieContext';
import MoviesItemsComponent from './MoviesItemsComponent';
import NoMoviesFoundComponent from './NoMoviesFoundComponent';
import SearchMenuComponent from './SearchMenuComponent';
import Spinner from './Spinner';
import NotFoundComponent from '../layout/NotFoundComponent';
import ErrorComponent from './ErrorComponent';

const MoviesComponent = () => {
    const movieContext = useContext(MovieContext);

    const { movies, filteredMovies, loading, apiError } = movieContext;

    useEffect(() => {
        movieContext.getAllMovies();
    }, []);

    const renderMovies = (movie) => {
        return (
            <div
                className="col-md-auto"
                style={{ paddingBottom: '10px' }}>
                <MoviesItemsComponent
                    key={movie.id}
                    movie={movie}
                />
            </div>
        );
    };

    return (
        <div className="container-fluid min-vh-100">
            <div className="row flex-grow-1 min-vh-100">
                <div className="col-2 p-2 w-25">
                    <SearchMenuComponent />
                </div>
                <div className="col p-2">
                    {apiError ? <ErrorComponent /> : loading ? <Spinner /> : <div className="row justify-content-center">{filteredMovies !== null ? filteredMovies.map((movie) => renderMovies(movie)) : movies.map((movie) => renderMovies(movie))}</div>}
                    {/* Conditional rendering for NoMoviesFoundComponent */}
                    {filteredMovies !== null && filteredMovies.length === 0 && (
                        <div>
                            <NoMoviesFoundComponent />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MoviesComponent;
