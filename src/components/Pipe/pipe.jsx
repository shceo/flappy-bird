import React from 'react';
import styles from '../../styles/Pipe/Pipe.module.css';
import topPipeImage from '../../assets/Pipe/pipe_up.png'; 
import bottomPipeImage from '../../assets/Pipe/pipe_down.png'; 

const Pipe = ({ topHeight, bottomHeight, position }) => {
    return (
        <div className={styles.pipeContainer} style={{ left: `${position}vw` }}>
            <div className={styles.topPipe} style={{ height: `${topHeight}vh` }}>
                <img src={topPipeImage} alt="Top Pipe" className={styles.pipeImage} />
            </div>
            <div className={styles.gap}></div>
            <div className={styles.bottomPipe} style={{ height: `${bottomHeight}vh` }}>
                <img src={bottomPipeImage} alt="Bottom Pipe" className={styles.pipeImage} />
            </div>
        </div>
    );
};

export default Pipe;
