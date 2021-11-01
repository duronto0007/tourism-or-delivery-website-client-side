import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Tour from '../Tour/Tour';
import './Tours.css';
const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() =>{
        fetch('https://cryptic-caverns-94688.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    },[])
    return (
       <div id="tours">
           <h1 className="mt-5 heading">BEST TOURS</h1>
           <hr className="arow"/>
        <div className="tours-container">
         
         {
             tours.map(tour => <Tour 
             key={tour.id}
             tour={tour}
             ></Tour>)
         }
     </div>
       </div>
    );
};

export default Tours;