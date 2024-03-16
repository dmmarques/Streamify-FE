import React from 'react';

const AboutMeComponent = () => {
    return (
        <div class="container-fluid min-vh-100 d-flex flex-column">
            <div
                class="row flex-grow-1 min-vh-100"
                style={{ alignContent: 'center', alignItems: 'center', margin: 'auto', width: '100%' }}>
                <div class="col d-flex align-items-center justify-content-center min-vh-100">
                    <div
                        class="card mb-3 w-75"
                        data-bs-theme="dark">
                        <div
                            class="row g-0 d-flex align-items-center justify-content-center"
                            style={{ height: '50%' }}>
                            <div class="col-md-2 pr-2 d-flex align-items-center justify-content-center w-25">
                                <img
                                    src={require('../images/movie.jpeg')}
                                    alt="..."
                                    style={{ borderRadius: '75%' }}
                                />
                            </div>
                            <div class="col-md-1 p-3 w-25">
                                <div class="row p-3 align-items-center justify-content-center">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        style={{ width: '50%' }}>
                                        <i class="bi bi-instagram"></i>
                                    </button>
                                </div>
                                <div class="row p-3 align-items-center justify-content-center">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        style={{ width: '50%' }}>
                                        <i class="bi bi-linkedin"></i>
                                    </button>
                                </div>
                                <div class="row p-3 align-items-center justify-content-center">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        style={{ width: '50%' }}>
                                        <i class="bi bi-google"></i>
                                    </button>
                                </div>
                                <div class="row p-3 align-items-center justify-content-center">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        style={{ width: '50%' }}>
                                        <i class="bi bi-github"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="col-md text-center 2-50">
                                <div class="card-body">
                                    <h3 class="card-title">Diogo Miguel Alves Marques</h3>
                                    <p class="card-text">As a dedicated software developer, I've spent the last 1.5 years specializing in backend development with Java and Spring Boot. Now, I'm expanding my expertise to the frontend. My goal is to master frontend technologies like HTML, CSS, and JavaScript to create seamless user experiences. With a strong foundation in backend development and a passion for learning, I'm excited to tackle new challenges and contribute to innovative software solutions.</p>
                                </div>
                                <div
                                    class="row p-3"
                                    style={{ textAlign: 'center' }}>
                                    <div class="col-md">
                                        <h3>Tech Stack</h3>
                                        <div class="col-md">Java</div>
                                        <div class="col-md">JavaScript</div>
                                        <div class="col-md">Python</div>
                                        <div class="col-md">C++</div>
                                    </div>
                                    <div class="col-md">
                                        <h3>Hobbies</h3>
                                        <div class="col-md">Football</div>
                                        <div class="col-md">Videogames</div>
                                        <div class="col-md">Programming</div>
                                        <div class="col-md">Friends</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeComponent;
