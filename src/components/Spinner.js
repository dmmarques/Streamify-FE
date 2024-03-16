import React from 'react';

const Spinner = () => {
    return (
        <div class="container-fluid d-flex min-vh-100 align-items-center justify-content-center">
            <img
                class="spinnerCustom"
                src={require('../images/favicon.ico')}
            />
        </div>
    );
};

export default Spinner;
