
import React, {useState} from "react";
import './../styles/App.css';


const App = () => {
  const [weather, setWeather] = useState({
    temperature: 25,
    conditions: 'Sunny'
  });

  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p>
        Temperature: <span style={{ color: temperatureColor }}>{weather.temperature}</span>
      </p>
    </div>
  );
}

export default App
