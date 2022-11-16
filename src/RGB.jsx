import { useState, useEffect } from 'react';
import './App.css';

const RGB = ({ hsl, rgb, setRgb }) => {
  // state for UI :(
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [styling, setStyling] = useState({
    background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
  });

  // watch for when hsl changes
  useEffect(() => {
    let hue = hsl[0];
    let saturation = hsl[1]/100;
    let lightness = hsl[2]/100;

    const getColor = (n) => {
      let k = (n + (hue / 30)) % 12;
      let a = saturation * Math.min(lightness, 1 - lightness);

      return lightness - (a * Math.max(-1, Math.min(k - 3, 9 - k, 1)));
    }

    setRed(255 * getColor(0));
    setGreen(255 * getColor(8));
    setBlue(255 * getColor(4));

    setStyling({
      background: `rgb(${255 * getColor(0)}, ${255 * getColor(8)}, ${255 * getColor(4)})`
    });

  }, [hsl]);

  const handleChange = (event) => {
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2]
    if (event.target.placeholder === 'red') {
      r = event.target.value;
    } else if (event.target.placeholder === 'green') {
      g = event.target.value;
    } else if (event.target.placeholder === 'blue') {
      b = event.target.value;
    }
    setRed(r);
    setGreen(g);
    setBlue(b);
    setStyling({
      background: `rgb(${r}, ${g}, ${b})`
    });
    setRgb([r, g, b]);
  };

  return (
    <div className="rgb-container">
      <div className="sliders">
        <div>
          <p>Red: {Math.ceil(red)}</p>
          <input type="range" min="0" max="255" value={red} placeholder="red" onChange={handleChange}/>
        </div>
        <div>
          <p>Green: {Math.ceil(green)}</p>
          <input type="range" min="0" max="255" value={green} placeholder="green" onChange={handleChange}/>
        </div>
        <div>
          <p>Blue: {Math.ceil(blue)}</p>
          <input type="range" min="0" max="255" value={blue} placeholder="blue" onChange={handleChange}/>
        </div>
      </div>
      <div className="color-square" style={styling}></div>
    </div>
  );
};

export default RGB;