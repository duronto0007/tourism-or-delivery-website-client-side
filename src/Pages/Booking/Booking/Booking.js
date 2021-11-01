import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const {tourId} = useParams();
    const [tour, setTour] = useState({});

useEffect( () =>{
    fetch(`https://cryptic-caverns-94688.herokuapp.com/tours/${tourId}`)
    .then(res => res.json())
    .then(data => setTour(data));
},[])

    return (
        <div className="mt-3 booking-part">
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tour.img} />
            <Card.Body>
                <Card.Title>{tour.name}</Card.Title>
                <Card.Title>{tour.price}</Card.Title>
                
                <Button className="book-tour" variant="primary">Book Tour</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;