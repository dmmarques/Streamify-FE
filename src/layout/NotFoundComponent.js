import React from 'react';

const NotFoundComponent = () => {
    return (
        <div class="container-fluid min-vh-100 justify-content-center align-items-center">
            <div class="row justify-content-center align-items-center">
                <img
                    src={require('../images/404_icon.png')}
                    style={{ width: '50%' }}></img>
            </div>
        </div>
    );
};

export default NotFoundComponent;
