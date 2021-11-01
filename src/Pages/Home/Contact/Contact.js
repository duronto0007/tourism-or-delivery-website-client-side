import React from 'react';
import { Button, Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Contact.css';
const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div id="contact" className="contact-info">
            
            <div className="contact">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mt-3">Get in Touch</h2>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="my-3"  {...register("example")} placeholder="Name" />
             <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input className="my-3" {...register("exampleRequired", { required: true })} placeholder="E-mail" />
            <br/>
            <textarea className="my-3" placeholder="Message"></textarea>
            
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            <input type="submit" />
            </form>
            <div>
              <h3 className="mt-3">Contact Information</h3>
              <input className="mt-4 p-4" type="number" placeholder="0173-9946189" />
              <br/>
              <input className="mt-4 p-4" placeholder="info@demolink.org" />
              <br/>
              <br/>
              <img className="fb-icon" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Grey-Logo.wine.svg"/>
              <img className="linkdin-icon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"/>
        
              <img className="twiter-icon" src="https://iconape.com/wp-content/files/zb/110922/svg/twitter-3.svg" />
            </div>
            </div>
        </div>
    );
};

export default Contact;