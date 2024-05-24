import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
                <img src="https://www.google.com/imgres?q=png%20картинка&imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F742%2F749%2Fpng-clipart-computer-icons-learning-icon-design-boulon-text-hand-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fru&docid=ThhZ84-syx5SWM&tbnid=0T8UyU9CIEyr-M&vet=12ahUKEwiu5qaj-6WGAxXEDxAIHXufCF0QM3oECB8QAA..i&w=348&h=348&hcb=2&ved=2ahUKEwiu5qaj-6WGAxXEDxAIHXufCF0QM3oECB8QAA" alt="Coin" /> {/* Используем URL изображения */}
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

