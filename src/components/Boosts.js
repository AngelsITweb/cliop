import React from 'react';
import { Link } from 'react-router-dom';
import './Boosts.css';

const Boosts = ({ onBackClick }) => {
    return (
        <div className="boosts">
            <Link to="/" className="back-arrow" onClick={onBackClick}>←</Link>
            <h2>Улучшение для игры</h2>
            <div className="boost-list">
                <h3>Достуаные улучшения</h3>
                <ul>
                    <li>+1 токен к клику</li>
                    <li>1000 запасов </li>
                    <li>Быстрое обновление</li>
                </ul>
            </div>
        </div>
    );
};

export default Boosts;