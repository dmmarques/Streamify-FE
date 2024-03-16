import React from 'react';

const FooterComponent = () => {
    return (
        <div
            className="container-fluid bg-dark"
            style={{ bottom: '0', left: '0', position: 'absolute' }}>
            <div className="row">
                <div className="col text-center text-primary mt-5 mr-5 mb-5 ml-5">
                    <p className="text-center text-warning">@copyright 2024 | Author : Diogo Marques</p>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;
