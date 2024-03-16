import React from 'react';

const ErrorComponent = () => {
    return (
        <div className="container-fluid d-flex min-vh-100 justify-content-center align-items-center">
            <table style={{ textAlign: 'center' }}>
                <tr>
                    <i class="bi bi-exclamation-triangle-fill errorIcon-300 text-warning"></i>
                </tr>
                <tr>
                    <h2>Something went wrong, try again later.</h2>
                </tr>
            </table>
        </div>
    );
};

export default ErrorComponent;
