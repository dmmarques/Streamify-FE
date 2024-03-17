import React from 'react';

const ErrorComponent = () => {
    return (
        <div className="container-fluid d-flex min-vh-100 justify-content-center">
            <table style={{ textAlign: 'center' }}>
                <tr>
                    <i class="bi bi-exclamation-triangle-fill errorIcon-300 text-warning"></i>
                    <h3>Something went wrong... Try again later.</h3>
                </tr>
            </table>
        </div>
    );
};

export default ErrorComponent;
