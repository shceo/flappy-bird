import React, { useState, useEffect } from 'react';
import styles from '../../styles/Background/Background.module.css';
import Base from './Base';
import Bird from '../Bird/Bird';
import Pipe from '../Pipe/pipe';

const Background = () => {
    const [pipes, setPipes] = useState([]);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const topHeight = Math.floor(Math.random() * 50) + 20;
            const bottomHeight = 80 - topHeight;

            setPipes(pipes => {
                
                const newPositions = positions.map(pos => pos - 1).filter(pos => pos > -100);
                setPositions([...newPositions, 100]); 

                return pipes
                    .map((pipe, index) => React.cloneElement(pipe, { key: index }))
                    .filter((_, index) => newPositions[index] > -100)
                    .concat(<Pipe key={pipes.length} topHeight={topHeight} bottomHeight={bottomHeight} />);
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [positions]);

    return (
        <div className={styles.backgroundContainer}>
            <Bird />
            <Base />
            {pipes.map((pipe, index) => (
                <div key={index} className={styles.pipeWrapper} style={{ left: `${positions[index]}vw` }}>
                    {pipe}
                </div>
            ))}
        </div>
    );
};

export default Background;
