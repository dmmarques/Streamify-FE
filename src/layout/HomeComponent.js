import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeComponent = () => {
    return (
        <div className="container-fluid p-0">
            <Carousel>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://img.freepik.com/free-photo/yellow-watercolor-paper_95678-446.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Streamify !</h3>
                        <p>Here you can watch all your favorite movies.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://static.vecteezy.com/system/resources/previews/005/182/612/non_2x/green-abstract-geometric-shape-background-free-vector.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Are you a curious developer ?</h3>
                        <p>Check our code base, here !</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-design-studio-room-web-template-business-report-with-smooth-circle-gradient-color_1258-54521.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Want to know more about us ?</h3>
                        <p>Check us out !</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div
                className="container min-vh-100"
                data-bs-theme="dark">
                <div class="card mb-3 w-100">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                src={require('../images/favicon.ico')}
                                alt="Stramify Logo"
                                style={{ width: '50%', borderRadius: '75%' }}
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body w-100">
                                <h2 class="card-title text-center">Overview</h2>
                                <div class="card text-white bg-success mb-3 w-100">
                                    <div class="card-header text-center w-100">As a React developer, I embarked on a journey to craft a movie app, and Streamify is the result of that endeavor. The primary goal was to create a simple, user-friendly application that simplifies the process of discovering films based on title, rating, and genre. Whether you're in the mood for an action-packed blockbuster, a heartwarming romance, or a spine-tingling thriller, Streamify has something for everyone. Join us on this cinematic adventure and elevate your movie-watching experience with Streamify today!</div>
                                </div>
                                <p class="card-text"></p>
                                <div class="card-body text-center">
                                    <h2>Functionality</h2>
                                    <div class="row">
                                        <div class="col md-4">
                                            <div class="card text-white bg-success mb-3">
                                                <div class="card-header text-center">Simple Intuitive User Interface</div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div
                                                class="card text-white bg-success mb-3"
                                                style={{ maxWidth: '18rem' }}>
                                                <div class="card-header text-center">Search Functionality</div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div
                                                class="card text-white bg-success mb-3"
                                                style={{ maxWidth: '18rem' }}>
                                                <div class="card-header text-center">State Management using the powerful Context API</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div
                                                class="card text-white bg-success mb-3"
                                                style={{ maxWidth: '18rem' }}>
                                                <div class="card-header text-center">State Management using the powerful Context API</div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div
                                                class="card text-white bg-success mb-3"
                                                style={{ maxWidth: '18rem' }}>
                                                <div class="card-header text-center">Error Handling</div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div
                                                class="card text-white bg-success mb-3"
                                                style={{ maxWidth: '18rem' }}>
                                                <div class="card-header text-center">Powered by Axios</div>
                                            </div>
                                        </div>
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
