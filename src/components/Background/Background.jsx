import React from 'react';
import styles from '../../styles/Background/Background.module.css';
import Base from "./Base";
import Bird from '../Bird/Bird';

const Background = () => {
    return (
        <div className={styles.backgroundContainer}>
            <Bird />
            <Base />
        </div>
    );
};

export default Background;
