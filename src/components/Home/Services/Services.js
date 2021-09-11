import React, { useEffect, useState } from 'react';
// import servicesData from '../../Datas/ServicesData.json';
// import servicesDat from '../../Datas/ServicesData.json';
import ServicesStyle from '../ServicesStyle/ServicesStyle';
import styles from './Services.module.css';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Services = () => {
    //Inserting Bulk data by button
    // const InsertBulkData = (data) => {
    //     fetch('https://nameless-crag-62193.herokuapp.com/admin/addBulkService', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(servicesDat)
    //     })
    // }

    const [service, setService] = useState([]);

    //showing all services in homepage
    useEffect(() => {
        fetch('https://nameless-crag-62193.herokuapp.com/admin/showAllServices')
            .then(res => res.json())
            .then(data => {
                setService(data);
                // console.log(service);
            })
    }, []);

    const classes = useStyles();
    return (
        <div className="container-fluid" id="services">
            <div className="offset-md-1 offset-sm-1 mt-5 row">
                <h5>We're Offering</h5>
                <h1>Creative Digital Agency</h1>

                {/* Inserting Bulk data
                <button onClick={InsertBulkData}>Add Serice</button> */}
            </div>
            {service.length === 0 && <div className={classes.root}>
                <LinearProgress />
                <LinearProgress color="secondary" />
            </div>}
            <div className={`${styles.service_container} container row mt-5 mb-5`}>
                {service.map((service) => <ServicesStyle service={service}></ServicesStyle>)}
            </div>
        </div>
    );
};

export default Services;