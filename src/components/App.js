
import React, { useState } from "react";
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
      <p>
        Conditions: {weather.conditions}
      </p>
    </div>
  );
}

export default App
