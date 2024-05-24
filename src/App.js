import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Frens from './components/Frens';
import Earn from './components/Earn';
import Boosts from './components/Boosts';
import './App.css';

const App = () => {
    const [progress, setProgress] = useState(0);

    const handleBackClick = () => {
        setProgress(prev => Math.min(prev + 25, 100)); // Увеличиваем прогресс на 25% при каждом нажатии
    };

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/frens" element={<Frens onBackClick={handleBackClick} />} />
                    <Route path="/earn" element={<Earn onBackClick={handleBackClick} />} />
                    <Route path="/boosts" element={<Boosts onBackClick={handleBackClick} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;