import React from 'react';
import { Card } from 'react-bootstrap';
import './Advantages.css';
import {  AiFillDollarCircle } from 'react-icons/fa';

const Advantages = () => {
    return (
        <div id="advantages" className="ad">
            <div className="card-info">
            <h1>Our Advantages</h1>
            <p>You can rely on our experience and the quality of services <br/> we provide.  Here are other reasons to book tours at Skyline.</p>

            </div>
            <div className="cards">
            <Card border="primary" style={{ width: '15rem' }}>
                <Card.Img className="card-img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dollar_sign_in_circle.svg/1200px-Dollar_sign_in_circle.svg.png" />
                <Card.Body>
                <Card.Title>Lowest Prices</Card.Title>
                <Card.Text>
                Skyline offers its clients an affordable pricing policy and very friendly atmoshphare.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '15rem' }}>
            <Card.Img className="card-img" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Noun_Project_tick_icon_675776_cc.svg/768px-Noun_Project_tick_icon_675776_cc.svg.png" />
            <Card.Body>
            <Card.Title>Variety of Tours</Card.Title>
            <Card.Text>
            We offer a vast variety of tours for those who love European travel.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card border="primary" style={{ width: '15rem' }}>
        <Card.Img className="card-img" variant="top" src="data:image/png;base64,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" />
            <Card.Body>
            <Card.Title>Easy Booking</Card.Title>
            <Card.Text>
            Easily book a tour, an air ticket or a hotel room using our website.
            </Card.Text>
            </Card.Body>
        </Card>

        <Card border="primary" style={{ width: '15rem' }}>
        <Card.Img className="card-img" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI89XXUdVWyoQSJOFLRZwDGw1gbRXfN7CgqQ&usqp=CAU" />
            <Card.Body>
            <Card.Title>Most Popular Agency</Card.Title>
            <Card.Text>
            We’ve been rated #1 European tour agency numerous times.
            </Card.Text>
            </Card.Body>
        </Card>
            </div>

        </div>
    );
};

export default Advantages;