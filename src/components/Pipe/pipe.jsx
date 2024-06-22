import React from 'react';
import styles from '../../styles/Pipe/Pipe.module.css';
import topPipeImage from '../../assets/Pipe/pipe_up.png'; 
import bottomPipeImage from '../../assets/Pipe/pipe_down.png'; 

const Pipe = ({ topHeight, bottomHeight }) => {
    return (
        <div className={styles.pipeContainer}>
            <img src={topPipeImage} alt="top pipe" className={styles.pipe} style={{ height: `${topHeight}vh` }}/>
            <div className={styles.gap}></div>
            <img src={bottomPipeImage} alt="bottom pipe" className={styles.pipe} style={{ height: `${bottomHeight}vh` }}/>
        </div>
    );
};

export default Pipe;