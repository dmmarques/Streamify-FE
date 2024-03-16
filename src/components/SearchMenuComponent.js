import React, { useContext } from 'react';
import MovieFilter from '../context/movie/MovieFilter';
import MovieContext from '../context/movie/movieContext';

const SearchMenuComponent = () => {
    const movieContext = useContext(MovieContext);

    const handleGenreFilter = (genre) => {
        movieContext.getMoviesByGenre(genre);
    };

    const handleRatingFilter = (rating) => {
        movieContext.getMoviesByRating(rating);
    };

    const handleYearFilter = (year) => {
        movieContext.getMoviesByYear(year);
    };

    return (
        <div className="container-fluid">
            <div
                class="card"
                data-bs-theme="dark"
                style={{ width: '20rem', textAlign: 'center', height: '80%' }}>
                <h1 class="text-success">Find Movie</h1>
                <MovieFilter />
                <div className="row m-2">
                    <h5 class="text-success">Rating</h5>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="3.0"
                            class="btn btn-success w-100"
                            onClick={() => handleRatingFilter('3.0')}></input>
                    </div>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="5.0"
                            class="btn btn-success w-100"
                            onClick={() => handleRatingFilter('5.0')}></input>
                    </div>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="8.0"
                            class="btn btn-success w-100"
                            onClick={() => handleRatingFilter('8.0')}></input>
                    </div>
                </div>
                <div className="row m-2">
                    <h5 class="text-success">Year</h5>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="2022"
                            class="btn btn-success w-100"
                            onClick={() => handleYearFilter('2022')}></input>
                    </div>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="2023"
                            class="btn btn-success w-100"
                            onClick={() => handleYearFilter('2023')}></input>
                    </div>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="2024"
                            class="btn btn-success w-100"
                            onClick={() => handleYearFilter('2024')}></input>
                    </div>
                </div>
                <div className="row m-2">
                    <h5 class="text-success">Genre</h5>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="COMEDY"
                            class="btn btn-success w-100"
                            onClick={() => handleGenreFilter('35')}></input>
                    </div>
                    <div className="col w-100 pb-2">
                        <input
                            type="button"
                            value="ANIMATION"
                            class="btn btn-success w-100"
                            onClick={() => handleGenreFilter('16')}></input>
                    </div>
                    <div className="col w-100 pb-2">
                        <input
                            type="button"
                            value="ADVENTURE"
                            class="btn btn-success w-100"
                            onClick={() => handleGenreFilter('12')}></input>
                    </div>
                    <div className="col w-100 pb-2">
                        <input
                            type="button"
                            value="ACTION"
                            class="btn btn-success w-100"
                            onClick={() => handleGenreFilter('28')}></input>
                    </div>
                    <div className="col w-100 pb-2">
                        <input
                            type="button"
                            value="THRILLER"
                            class="btn btn-success w-100"
                            onClick={() => handleGenreFilter('53')}></input>
                    </div>
                    <div className="col w-100 pb-2">
                        <input
                            type="button"
                            value="WAR"
                            class="btn btn-success w-100"
                            onClick={() => handleGenreFilter('10752')}></input>
                    </div>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="HORROR"
                            class="btn btn-success w-100 "
                            onClick={() => handleGenreFilter('27')}></input>
                    </div>
                    <div className="col w-100">
                        <input
                            type="button"
                            value="HISTORY"
                            class="btn btn-success w-100 "
                            onClick={() => handleGenreFilter('36')}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchMenuComponent;
