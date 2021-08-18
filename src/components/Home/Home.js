import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Services from './Services/Services';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header/>
            <Services></Services>
        </div>
    );
};

export default Home;