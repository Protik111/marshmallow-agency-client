import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Services from './Services/Services';
import Workers from './Workers/Workers';
import Slider from './Slider/Slider';
import Count from './Count/Count';
import Customer from './Customer/Customer';
import Partners from './Partners/Partners';
import Plan from './Plan/Plan';
import Cards from './Cards/Cards';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header/>
            <Services></Services>
            <Workers></Workers>
            <Slider></Slider>
            <Count></Count>
            <Customer></Customer>
            <Partners></Partners>
            <Plan></Plan>
            <Cards></Cards>
            <Header></Header>
        </div>
    );
};

export default Home;