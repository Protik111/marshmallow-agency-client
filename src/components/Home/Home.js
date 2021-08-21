import React, { useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Services from './Services/Services';
import Workers from './Workers/Workers';
import Slider from './Slider/Slider';
import Count from './Count/Count';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header/>
            <Services></Services>
            <Workers></Workers>
            <Slider></Slider>
            <Count></Count>
        </div>
    );
};

export default Home;