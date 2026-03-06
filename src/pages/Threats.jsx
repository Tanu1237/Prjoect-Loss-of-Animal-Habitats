import React from 'react';
import './Threats.css';

function Threats() {
    return (
        <div className="threats-container">
            <h1 className="title" style={{ color: '#8B4513' }}>Threats to Animal Habitats</h1>
            <p className="description" style={{ color: '#CC5500' }}>Here are some of the main threats to animal habitats:</p>
            <ul className="threats-list">
                <li style={{ color: '#FFBF00' }}>Deforestation</li>
                <li style={{ color: '#CC5500' }}>Pollution</li>
                <li style={{ color: '#8B4513' }}>Climate Change</li>
                <li style={{ color: '#FFBF00' }}>Urban Development</li>
                <li style={{ color: '#CC5500' }}>Invasive Species</li>
            </ul>
        </div>
    );
}

export default Threats;
