import React from 'react';
import { Link } from 'react-router-dom';

const MoviesItemsComponent = ({ movie }) => {
    const getPosterURL = (posterPath) => {
        return 'https://media.themoviedb.org/t/p/w220_and_h330_face' + posterPath;
    };

    return (
        <div
            class="card h-100"
            data-bs-theme="dark"
            style={{ width: '18rem', textAlign: 'center', marginTop: 'auto' }}>
            <img src={getPosterURL(movie.poster_path)} />
            <div class="card-body d-flex flex-column text-center">
                <h5 class="card-title h-25">{movie.title}</h5>
                <div class="card-text">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Rating: {Math.round(movie.vote_average)}/10</li>
                        <li class="list-group-item">Release Date: {movie.release_date}</li>
                        <li class="list-group-item">Language: {movie.original_language}</li>
                    </ul>
                </div>
                {console.log(movie)}
                <Link
                    to={`/movie/${movie.id}`}
                    class="btn btn-success align-self-end"
                    style={{ width: '100%', marginTop: 'auto' }}>
                    <i class="bi bi-play-circle-fill"></i>
                </Link>
            </div>
        </div>
    );
};

export default MoviesItemsComponent;
