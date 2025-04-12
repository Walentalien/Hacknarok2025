import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Witaj na Forum</h1>
      
      <div className="content-grid">
        <div className="selected-ternary">
          <h2>Wybrane Ternary</h2>
          <ul>
            <li>Temat nr 1</li>
            <li>Temat nr 2</li>
            <li>Temat nr 3</li>
            <li>Temat nr 4</li>
          </ul>
        </div>
        
        <div className="map">
          <h2>Mapa</h2>
          {/* Map placeholder would go here */}
        </div>
      </div>
      
      <div className="local-topics">
        <h2>Tematy w twojej okolicy</h2>
        <ul>
          <li>Temat nr 1</li>
          <li>Temat nr 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;