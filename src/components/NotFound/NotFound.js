import React from 'react';
import notFoundImage from './notFound.gif';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.img}>
            <img alt="" src={notFoundImage} className="img-fluid"></img>
        </div>
    );
};

export default NotFound;