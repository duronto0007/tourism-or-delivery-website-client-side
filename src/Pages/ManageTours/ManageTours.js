import React, { useEffect, useState } from 'react';
import './ManageTours.css'

const ManageTours = () => {
    const [tours, setTours] = useState([]);
    useEffect( () =>{
        fetch('https://cryptic-caverns-94688.herokuapp.com/tours')
        .then(res => res.json())
        .then (data => setTours(data))
    },[]);

    const handleDelete = id => {
        const url = `https://cryptic-caverns-94688.herokuapp.com/tours/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Deleted Successfully')
                const remaining = tours.filter(tour => tour._id !== id);
                setTours(remaining);
            }
            
        })
    }
    return (
        <div id="manageTours">
            <h2 className="mt-5 text-white">Manage Tours</h2>
           <div className="manage-tour">
           {
                tours.map(tour => <div className="single-manage" key={tour._id}> 
                <img className="imgage" src={tour.img} alt="" />
                <h3>{tour.name}</h3>
                 <p> Price: ${tour.price} </p>
                <button onClick={ () => handleDelete(tour._id)} className="manage-btn">Delete</button>
                </div>)
            }
           </div>
        </div>
    );
};

export default ManageTours;