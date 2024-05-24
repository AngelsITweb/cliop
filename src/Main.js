import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import coinImage from './images/Coin.png'; // Импортируем изображение из папки src/images
import './Main.css';

const Main = () => {
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const savedBalance = localStorage.getItem('balance');
            if (savedBalance) {
                setBalance(parseInt(savedBalance, 10));
            }
        } catch (error) {
            console.error('Failed to retrieve balance from localStorage', error);
        }
    }, []);

    const incrementBalance = useCallback(() => {
        const newBalance = balance + 1;
        setBalance(newBalance);
        localStorage.setItem('balance', newBalance);
    }, [balance]);

    const resetBalance = useCallback(() => {
        setBalance(0);
        localStorage.setItem('balance', 0);
    }, []);

    const progressPercentage = (balance / 5500) * 100;

    return (
        <div className="main">
            <div className="score-section">
                <div className="score">{balance}</div>
                <div className="rank">0nd</div>
                <div className="trophy">
                    <span className="trophy-icon">🏆</span>
                    <span>Bronze</span>
                </div>
            </div>
            <div className="coin-image" onClick={incrementBalance}>
                <img src={coinImage} alt="Coin" />
            </div>
            <div className="progress-section">
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className="progress-text">{balance} / 5500</div>
            </div>
            <div className="buttons">
                <button className="button" onClick={() => navigate('/frens')}>Frens</button>
                <button className="button" onClick={() => navigate('/earn')}>Earn</button>
                <button className="button" onClick={() => navigate('/boosts')}>Boosts</button>
                <button className="button" onClick={resetBalance}>Reset</button>
            </div>
        </div>
    );
};

export default Main;

