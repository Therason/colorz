import { useState, useEffect } from 'react';
import './App.css';

const RGB = ({ hsl }) => {
  const [ r, setR ] = useState(255);
  const [ g, setG ] = useState(0);
  const [ b, setB ] = useState(0);

  const [styling, setStyling] = useState({
    background: `rgb(${r}, ${g}, ${b})`,
    width: "400px",
    height: "400px"
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
    setR(255 * getColor(0));
    setG(255 * getColor(8));
    setB(255 * getColor(4));

    setStyling({
      background: `rgb(${r}, ${g}, ${b})`,
      width: "400px",
      height: "400px"
    });

    console.log(`rgb(${r}, ${g}, ${b})`);

  }, [hsl]);

  return (
    <div className="rgb-container">
      <div style={styling}></div>
    </div>
  );
};

export default RGB;