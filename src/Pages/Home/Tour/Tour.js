import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = ({tour}) => {
         const {_id,name, price, img} = tour;
    return (
        <div className="tour">
          <Card className="bg" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                 Price: ${price}
                </Card.Text>
               <Link to={`/booking/${_id}`}> 
               <Button variant="primary">Book Tour</Button>
               </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Tour;