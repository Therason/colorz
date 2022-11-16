import { useState } from 'react';
import './App.css';

const HSL = ({ handleChange, hsl, styling }) => {
  return (
    <div className="hsv-container">
      <div className="sliders">
        <div>
          <p>Hue</p>
          <input type="range" min="0" max="360" value={hsl[0]} placeholder="hue" onChange={handleChange} />
        </div>
        <div>
          <p>Saturation</p>
          <input type="range" min="0" max="100" value={hsl[1]} placeholder="saturation" onChange={handleChange} />
        </div>
        <div>
          <p>Lightness</p>
          <input type="range" min="0" max="100" value={hsl[2]} placeholder="lightness" onChange={handleChange} />
        </div>
      </div>
      <div style={styling}></div>
    </div>
  );
};

export default HSL;