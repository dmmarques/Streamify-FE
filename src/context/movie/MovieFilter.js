import React, { useContext, useState } from 'react';
import MovieContext from './movieContext';

const MovieFilter = () => {
    const movieContext = useContext(MovieContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        movieContext.getMovieByTitle(text);
        setText('');
    };

    return (
        <form
            class="d-flex"
            role="search"
            onSubmit={onSubmit}>
            <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={onChange}></input>
            <button
                class="btn btn-success"
                type="submit">
                Search
            </button>
        </form>
    );
};

export default MovieFilter;
