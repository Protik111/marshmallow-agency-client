import React, { useEffect } from 'react';
import delotti from '../../../images/logos/deloit.png';
import erricson from '../../../images/logos/erricson.png';
import netflix from '../../../images/logos/netflix.png';
import instagram from '../../../images/logos/instagram.png';
import coinbase from '../../../images/logos/coinbase.png';

//import aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className='container-fluid mt-5 mb-5'>
            <div className="row justify-content-center text-center p-2">
                <div className="col-md-2 m-2">
                    <img src={delotti} alt=""/>
                </div>
                <div data-aos="fade-up" className="col-md-2 m-2">
                    <img src={erricson} alt=""/>
                </div>
                <div className="col-md-2 m-2">
                    <img src={netflix} alt=""/>
                </div>
                <div data-aos="fade-up" className="col-md-2 m-2">
                    <img src={instagram} alt=""/>
                </div>
                <div className="col-md-2 m-2">
                    <img src={coinbase} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Partners;