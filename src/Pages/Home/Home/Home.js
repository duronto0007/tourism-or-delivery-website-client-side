import React from 'react';
import AddTour from '../../AddTour/AddTour';
import ManageTours from '../../ManageTours/ManageTours';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Tours></Tours>
            <AddTour></AddTour>
            <ManageTours></ManageTours>
            <About></About>
            <Advantages></Advantages>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;