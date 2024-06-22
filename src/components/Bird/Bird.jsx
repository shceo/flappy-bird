import React from 'react';
import styles from '../../styles/Bird/Bird.module.css';
import birdImage from '../../assets/Bird/midflap.png';

const Bird = () => {
    return (
        <div className={styles.birdContainer}>
            <img src={birdImage} alt="bird" className={styles.bird}/>
        </div>
    );
};

export default Bird;
