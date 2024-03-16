import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieContext from '../context/movie/movieContext';

const MovieDetailsComponent = () => {
    const movieContext = useContext(MovieContext);
    const { detailedMovie } = movieContext;
    const params = useParams();

    useEffect(() => {
        movieContext.getMovieDetailsById(params.id);
    }, []);

    return (
        <div>
            <div
                class="card p-3"
                data-bs-theme="dark"
                style={{ width: '18rem;', textAlign: 'center', alignItems: 'center' }}>
                <h2 class="card-title">{detailedMovie.title}</h2>
                <iframe
                    width="80%"
                    height="600"
                    src="https://www.youtube.com/embed/xjFzdK0X4AY?si=DcmgPsGonsl0wk9r"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                <div
                    class="card-body"
                    style={{ textAlign: 'center' }}>
                    <div class="row">
                        <div class="col">Rating: {Math.round(detailedMovie.vote_average)}</div>
                        <div class="col">
                            <i class="bi bi-eye-fill"></i>
                            {Math.round(detailedMovie.popularity)}
                        </div>
                        <div class="col">Official Page: {detailedMovie.homepage}</div>
                        <div class="col">Duration: {detailedMovie.runtime}m</div>
                        <div class="col">Release Date: {detailedMovie.release_date}</div>
                    </div>
                </div>
                <h4>Overview</h4>
                <div
                    class="card-body"
                    style={{ textAlign: 'center' }}>
                    <p>{detailedMovie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;
