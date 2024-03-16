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
                <h1 class="card-title text-success">{detailedMovie.title}</h1>
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
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col">
                                <i class="bi bi-arrow-up-square-fill"></i>
                                {Math.round(detailedMovie.vote_average)}/10
                            </div>
                            <div class="col">
                                <i class="bi bi-eye-fill"></i>
                                {Math.round(detailedMovie.popularity)}
                            </div>
                            <div class="col">
                                <a
                                    href={detailedMovie.homepage}
                                    target="_blank">
                                    <button
                                        type="button"
                                        class="btn btn-success">
                                        <i class="bi bi-globe2"></i>
                                    </button>
                                </a>
                            </div>
                            <div class="col">
                                <i class="bi bi-clock-fill"></i>
                                {detailedMovie.runtime}m
                            </div>
                            <div class="col">
                                <i class="bi bi-calendar-check-fill"></i> {detailedMovie.release_date}
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <h4>Overview</h4>
                    <div
                        class="card-body"
                        style={{ textAlign: 'center' }}>
                        <p>{detailedMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;
