import { useState } from 'react';
import './App.css';
import HSL from './HSL';
import RGB from './RGB';

function App() {

  // hsl state
  const [ hue, setHue ] = useState(360);
  const [ saturation, setSaturation ] = useState(100);
  const [ lightness, setLightness ] = useState(50);
  const [ styling, setStyling ] = useState({
    background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    width: "400px",
    height: "400px"
  });

  const handleChange = (event) => {
    if (event.target.placeholder === 'hue') {
      setHue(event.target.value);
    } else if (event.target.placeholder === 'saturation') {
      setSaturation(event.target.value);
    } else if (event.target.placeholder === 'lightness') {
      setLightness(event.target.value);
    }
    setStyling({
      background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
      width: "400px",
      height: "400px"
    });
  };

  return (
    <div className="App">
      <HSL handleChange={handleChange} hsl={[hue, saturation, lightness]} styling={styling} />
      <RGB hsl={[hue, saturation, lightness]}/>
    </div>
  );
}

export default App;
