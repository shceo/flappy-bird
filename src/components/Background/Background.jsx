import React, { useState, useEffect } from 'react';
import styles from '../../styles/Background/Background.module.css';
import Base from './Base';
import Bird from '../Bird/Bird';
import Pipe from '../Pipe/pipe';

const Background = () => {
    const [pipes, setPipes] = useState([]);
    const [birdPosition, setBirdPosition] = useState(50);
    const [gameOver, setGameOver] = useState(false);

    const handleJump = () => {
        if (!gameOver) {
            setBirdPosition(prev => Math.max(prev - 20, 0));
        }
    };

    const restartGame = () => {
        setGameOver(false);
        setBirdPosition(50);
        setPipes([]);
    };

    useEffect(() => {
        if (!gameOver) {
            const interval = setInterval(() => {
                const topHeight = Math.floor(Math.random() * 50) + 20;
                const bottomHeight = 80 - topHeight;
                
                setPipes(pipes => [
                    ...pipes, 
                    { id: pipes.length, topHeight, bottomHeight, position: 100 }
                ]);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const gravityInterval = setInterval(() => {
                setBirdPosition(prev => Math.min(prev + 5, 100));
            }, 200);
            return () => clearInterval(gravityInterval);
        }
    }, [gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const movePipesInterval = setInterval(() => {
                setPipes(pipes => pipes.map(pipe => ({
                    ...pipe,
                    position: pipe.position - 1
                })).filter(pipe => pipe.position > -10));
            }, 100);
    
            const checkCollisionInterval = setInterval(() => {
                const birdTop = birdPosition;
                const birdBottom = birdPosition + 5;
    
                for (let pipe of pipes) {
                    const pipeLeft = pipe.position;
                    const pipeRight = pipe.position + 10;
    
                    if (pipeLeft < 30 && pipeRight > 20) {
                        if (birdTop < pipe.topHeight || birdBottom > 100 - pipe.bottomHeight) {
                            setGameOver(true);
                            return;
                        }
                    }
                }
    
                if (birdBottom >= 100) {
                    setGameOver(true);
                }
            }, 100);
    
            return () => {
                clearInterval(movePipesInterval);
                clearInterval(checkCollisionInterval);
            };
        }
    }, [gameOver, birdPosition, pipes]);

    return (
        <div className={styles.backgroundContainer} onClick={handleJump}>
            <Bird position={birdPosition} />
            <Base />
            {pipes.map(pipe => (
                <Pipe
                    key={pipe.id}
                    topHeight={pipe.topHeight}
                    bottomHeight={pipe.bottomHeight}
                    position={pipe.position}
                />
            ))}
            {gameOver && (
                <div className={styles.gameOverContainer}>
                    <h1>Game Over</h1>
                    <button onClick={restartGame}>Restart</button>
                </div>
            )}
        </div>
    );
};

export default Background;