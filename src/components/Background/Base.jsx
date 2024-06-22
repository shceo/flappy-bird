import React from 'react';
import styles from "../../styles/Background/Base.module.css";
import Ground from '../../assets/Background/base.png';

const Base = () => {
    return (
        <div className={styles.baseContainer}>
            <img src={Ground} alt="background" className={styles.base}/>
        </div>
    );
};

export default Base;