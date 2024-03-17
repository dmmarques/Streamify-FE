import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
    return (
        <div className="container-fluid p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://img.freepik.com/free-photo/abstract-orange-background-layout-designstudioroom-web-template-business-report-with-smooth-circle-gradient-color_1258-101951.jpg"
                    />
                    <Carousel.Caption>
                        <Link
                            to="/movies"
                            className="linkCaroussel">
                            <h3>Welcome to Streamify !</h3>
                            <p>Here you can watch all your favorite movies.</p>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://img.freepik.com/free-photo/abstract-smooth-orange-background-layout-designstudioroom-web-template-business-report-with-smooth-circle-gradient-color_1258-96066.jpg"
                    />
                    <Carousel.Caption>
                        <a
                            href="https://github.com/dmmarques/Streamify-FE"
                            target="_blank"
                            className="linkCaroussel">
                            <h3>Are you a curious developer ?</h3>
                            <p>Check the code base !</p>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://img.freepik.com/free-photo/green-painted-smooth-textured-background_53876-108262.jpg"
                    />
                    <Carousel.Caption>
                        <Link
                            to="/aboutMe"
                            className="linkCaroussel">
                            <h3>Want to know more about who created Streamify ?</h3>
                            <p>Click here !</p>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div
                className="container min-vh-100 pt-5"
                data-bs-theme="dark">
                <div class="card mb-3 h-100 w-100">
                    <div class="row g-0">
                        <div class="col-md-4 d-flex align-items-center justify-content-center">
                            <img
                                src={require('../images/favicon.ico')}
                                alt="Stramify Logo"
                                style={{ width: '50%', borderRadius: '75%' }}
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="row w-100">
                                <div class="card-body d-flex flex-column text-center">
                                    <h2 class="card-title text-center">Overview</h2>
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div class="card-header text-center w-100">As a React developer, I embarked on a journey to craft a movie app, and Streamify is the result of that endeavor. The primary goal was to create a simple, user-friendly application that simplifies the process of discovering films based on title, rating, and genre. Whether you're in the mood for an action-packed blockbuster, a heartwarming romance, or a spine-tingling thriller, Streamify has something for everyone. Join us on this cinematic adventure and elevate your movie-watching experience with Streamify today!</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row w-100">
                                <h2 class="card-title text-center">Core Features</h2>
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div className="card-body text-center">Simple and Intuitive User Interface</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div className="card-body d-flex align-items-center justify-content-center">Search Menu</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div className="card-body d-flex align-items-center justify-content-center">Powered by Axios</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div className="card-body text-center">State Management using the powerful Context API</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div className="card-body d-flex align-items-center justify-content-center">Error Handling</div>
                                    </div>
                                </div>
                                <div class="col-lg-4 d-flex align-items-stretch">
                                    <div class="card text-white bg-success mb-3 w-100">
                                        <div className="card-body d-flex align-items-center justify-content-center">Conditional Rendering</div>
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

export default HomeComponent;
