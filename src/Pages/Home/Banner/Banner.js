import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
            <Carousel.Item>
                <img 
                className="d-block w-100 img-banner"
                src="https://i.ibb.co/FYKJhFr/banner.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>The Best Trips Around Portugal Begin With Us!</h1>
                <p>Don't get married, save money and Travel and enjoy your life.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-banner"
                src="https://i.ibb.co/tCWdcL7/jeshoots-com-m-SESwd-MZr-A-unsplash.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1>The Best Trips Around Germany Begin With Us!</h1>
                <p>Travling is one of the best Advanchar in our Life.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-banner"
                src="https://i.ibb.co/tL4qdWB/michal-parzuchowski-x-FItah-F3-CY4-unsplash.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1>The Best Trips Around Franch Begin With Us!</h1>
                <p>Freach is one of the best and Historical country in Europ.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;