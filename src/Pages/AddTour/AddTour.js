import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddTour.css';

const AddTour = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://cryptic-caverns-94688.herokuapp.com/tours', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Tour Added Successfully");
                reset();
            }
        })
    }
    return (
        <div id="addtour" className="add-tour mt-5">
            <h2 className=" mt-5">Add A Tour</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name" ,{ required: true })}  placeholder="Name" />
                <input type="number" {...register("price", { required: true })} placeholder="Price" />
                <input {...register("img", { required: true })} placeholder="image Url" />
                <input type="submit" />
                </form>
        </div>
    );
};

export default AddTour;