import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="div-one mt-5">
                <h3>TOURS</h3>
                <h2>353</h2>
                <input type="email" placeholder="Email" />
                <Button>Sned</Button>
            </div>
            <div className="div-two">
                <h2>Twitter Feed</h2>
                <p className="para-2">The Rule Of Thirds: An Ultimate Key To Your Stunning  #Photo  -  https://goo.gl/owH6x5 #webdesign</p>
                <p className="para-2">50 Professional  #CV  Templates For Word That Look Like #Photoshop  Designs -  https://goo.gl/zynQiY #webdesign</p>
                <p className="para-two">The Art of Paper: 10 Best Notebooks for  #Designers - https://goo.gl/7dDT #inspiration</p>
            </div>
            <div className="div-three">
                <h2>About Us</h2>
                <p>Founded in 2005, Skyline offers travelers a great selection of tours and excursions in Portugal. Explore the best and yet untraveled places of this breathtaking European destination.</p>
                <h2>Newsletter</h2>
                <p>Keep up with the weekly news and updates from Skyline. Enter your e-mail and subscribe to our newsletter.</p>
            </div>
            
            <p className="foo-para">© 2021 All Rights Reserved</p>
        </div>
    );
};

export default Footer;