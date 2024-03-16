import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HomeComponent = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://img.freepik.com/free-photo/yellow-watercolor-paper_95678-446.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Streamify !</h3>
                        <p>Here you can watch all your favorite movies</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width="100%"
                        height="200"
                        src="https://static.vecteezy.com/system/resources/previews/005/182/612/non_2x/green-abstract-geometric-shape-background-free-vector.jpg"
                    />
                    <Carousel.Caption>
                        <h3>Start looking for your favorite movies !</h3>
                        <p>Completly free !</p>
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
                        <p>We have a full page dedicated to that.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container-fluid min-vh-100"></div>
        </div>
    );
};

export default HomeComponent;
