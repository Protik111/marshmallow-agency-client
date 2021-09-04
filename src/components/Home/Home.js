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
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Scrollup from './Scrollup/Scrollup';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header/>
            <Services></Services>
            <Workers></Workers>
            <Slider></Slider>
            <Count></Count>
            {/* <CustomerData></CustomerData> */}
            <Customer></Customer>
            <Partners></Partners>
            <Plan></Plan>
            <Cards></Cards>
            <Contact></Contact>
            <Footer></Footer>
            <Scrollup></Scrollup>
        </div>
    );
};

export default Home;