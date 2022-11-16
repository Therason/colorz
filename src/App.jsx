import { useState } from 'react';
import './App.css';
import HSL from './HSL';
import RGB from './RGB';

function App() {

  const [hsl, setHsl] = useState([0, 100, 50]);
  const [rgb, setRgb] = useState([255, 0, 0]);

  return (
    <div className="App">
      <HSL rgb={rgb} hsl={hsl} setHsl={setHsl}/>
      <RGB hsl={hsl} rgb={rgb} setRgb={setRgb}/>
    </div>
  );
}

export default App;
