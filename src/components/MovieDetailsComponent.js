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
        <div
            className="container-fluid pt-3 pb-3"
            data-bs-theme="dark">
            <div
                class="card p-3"
                data-bs-theme="dark"
                style={{ textAlign: 'center', alignItems: 'center' }}>
                <div className="row w-100">
                    <div className="row">
                        <div className="col">
                            <h1 class="card-title">{detailedMovie.title}</h1>
                            <hr className="text-success"></hr>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col w-100">
                            <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/xjFzdK0X4AY?si=DcmgPsGonsl0wk9r"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col">
                            <i class="bi bi-arrow-up-square-fill text-success"></i>
                            {Math.round(detailedMovie.vote_average)}/10
                        </div>
                        <div class="col">
                            <i class="bi bi-eye-fill text-success"></i>
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
                            <i class="bi bi-clock-fill text-success"></i>
                            {detailedMovie.runtime}m
                        </div>
                        <div class="col">
                            <i class="bi bi-calendar-check-fill text-success"></i> {detailedMovie.release_date}
                        </div>
                    </div>
                </div>
                <div class="row w-100 pt-3">
                    <div className="col w-100">
                        <h4>Overview</h4>
                        <hr className="text-success"></hr>
                        <p>{detailedMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsComponent;
