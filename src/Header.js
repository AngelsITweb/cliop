import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <img src="" alt="Logo" className="logo" />
                <div className="header-title">COIN JOB</div>
            </div>
            <div className="header-right">
                <div className="header-item">
                    <span className="coin-icon">🪙</span>
                    <span>10,638,095</span>
                </div>
                <div className="header-item">
                    <span>31st</span>
                </div>
                <div className="header-item">
                    <span className="trophy-icon">🏆</span>
                    <span>Silver</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
