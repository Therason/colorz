import { useState, useEffect } from 'react';
import './App.css';

const HSL = ({rgb, hsl, setHsl}) => {
  // state for UI
  const [h, setH] = useState(hsl[0]);
  const [s, setS] = useState(hsl[1]);
  const [l, setL] = useState(hsl[2]);

  const [styling, setStyling] = useState({
    background: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
  });

  // watch for when rgb changes
  useEffect(() => {
    const red = rgb[0]/255;
    const green = rgb[1]/255;
    const blue = rgb[2]/255;

    const xMax = Math.max(red, green, blue);
    const xMin = Math.min(red, green, blue);

    const chroma = xMax - xMin;
    const lightness = (xMax + xMin) / 2;

    let hue;
    if (chroma === 0) {
      hue = 0;
    } else if (xMax === red && xMax !== blue) {
      hue = 60 * ((green - blue) / chroma);
    } else if (xMax === green) {
      hue = 60 * (2 + ((blue - red) / chroma));
    } else {
      hue = Math.abs(60 * (4 + ((red - green) / chroma)));
    }

    let saturation;
    if (lightness === 0 || lightness === 1) {
      saturation = 0;
    } else {
      saturation = (xMax - lightness) / (Math.min(lightness, 1 - lightness));
    }

    // hue is negative if max component is red, and green < blue, so add 360 deg
    setH(hue < 0 ? hue + 360 : hue);
    setS(saturation * 100);
    setL(lightness * 100);

    setStyling({
      background: `hsl(${hue < 0 ? hue + 360 : hue}, ${saturation * 100}%, ${lightness * 100}%)`
    });

  }, [rgb]);

  const handleChange = (event) => {
    let hue = hsl[0];
    let saturation = hsl[1];
    let lightness = hsl[2];
    if (event.target.placeholder === 'hue') {
      hue = event.target.value;
    } else if (event.target.placeholder === 'saturation') {
      saturation = event.target.value;
    } else if (event.target.placeholder === 'lightness') {
      lightness = event.target.value;
    }
    setH(hue);
    setS(saturation);
    setL(lightness);
    setStyling({
      background: `hsl(${hue}, ${saturation}%, ${lightness}%)`
    });
    setHsl([hue, saturation, lightness]);
  }

  return (
    <div className="hsv-container">
      <div className="sliders">
        <div>
          <p>Hue: {Math.ceil(h)}°</p>
          <input type="range" min="0" max="360" value={h} placeholder="hue" onChange={handleChange} />
        </div>
        <div>
          <p>Saturation: {Math.ceil(s)}%</p>
          <input type="range" min="0" max="100" value={s} placeholder="saturation" onChange={handleChange} />
        </div>
        <div>
          <p>Lightness: {Math.ceil(l)}%</p>
          <input type="range" min="0" max="100" value={l} placeholder="lightness" onChange={handleChange} />
        </div>
      </div>
      <div className="color-square" style={styling}></div>
    </div>
  );
};

export default HSL;