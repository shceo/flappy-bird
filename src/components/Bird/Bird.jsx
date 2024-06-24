import React, { useState, useEffect } from 'react';
import styles from '../../styles/Bird/Bird.module.css';
import birdImage from '../../assets/Bird/midflap.png';

const Bird = ({ position }) => {
    return (
        <div className={styles.birdContainer} style={{ top: `${position}%` }}>
            <img src={birdImage} alt="bird" className={styles.bird} />
        </div>
    );
};

export default Bird;