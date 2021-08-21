import React, { useContext } from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Services from './Services/Services';
import Workers from './Workers/Workers';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header/>
            <Services></Services>
            <Workers></Workers>
        </div>
    );
};

export default Home;