import React from "react";
import GetWeather from './components/GetWeather'
import OutputData from './components/OutputData'
import { StateProvider } from './components/StateContext';

function App() {
  return (
    <div>
      <StateProvider>
        <GetWeather />
        <OutputData />
      </StateProvider>
    </div>
  );
}

export default App;
