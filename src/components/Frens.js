import React from 'react';
import { Link } from 'react-router-dom';
import './Frens.css';

const Frens = ({ onBackClick }) => {
    return (
        <div className="frens">
            <Link to="/" className="back-arrow" onClick={onBackClick}>←</Link>
            <h2>Партнерский кабинет</h2>
            <div className="invite-section">
                <p>Зарабатывайте токены приглашая друзей:</p>
                <input type="text" value="https://yourapp.com/invite" readOnly />
                <p>Вы пригласили  <strong>5</strong> друзей.</p>
            </div>
            <div className="bonuses">
                <h3>Бонусы которые можете заработать</h3>
                <ul>
                    <li>Пригласите 5 друзей получите 5000 токенов</li>
                    <li>Пригласите 20 друзей получите 30000 токенов</li>
                    <li>Пригласите 50 друзей получите 100000 токенов</li>
                </ul>
            </div>
        </div>
    );
};

export default Frens;