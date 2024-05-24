import React from 'react';
import { Link } from 'react-router-dom';
import './Earn.css';

const Earn = ({ onBackClick }) => {
    return (
        <div className="earn">
            <Link to="/" className="back-arrow" onClick={onBackClick}>←</Link>
            <h2>Заработок на заданиях</h2>
            <div className="tasks">
                <h3>Доступны к выполнению</h3>
                <ul>
                    <li>Подпишитесь на канал</li>
                    <li>Подпишитесь на группу</li>
                    <li>Подпишитесь на спонсоров</li>
                </ul>
            </div>
        </div>
    );
};

export default Earn;