import React from 'react';

const NoMoviesFoundComponent = () => {
    return (
        <div className="container-fluid d-flex min-vh-100 justify-content-center">
            <table style={{ textAlign: 'center' }}>
                <tr>
                    <i class="bi bi-eye-slash-fill errorIcon-300"></i>
                    <h3>No results were found ... Try something else.</h3>
                </tr>
            </table>
        </div>
    );
};

export default NoMoviesFoundComponent;
