import React from "react";
import GetWeather from './components/GetWeather'
import OutputData from './components/OutputData'
import Map from './components/LeafletMap'
import { StateProvider } from './components/StateContext';
// global styles
import GlobalStyles from './components/GlobalStyles';


function App() {
  return (
    <div>
      <GlobalStyles />
      <StateProvider>
        <GetWeather />
        <OutputData />
      </StateProvider>
      <Map />
    </div>
  );
}

export default App;
