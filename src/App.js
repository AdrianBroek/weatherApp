import React, { useState } from "react";
import GetWeather from './components/GetWeather'
import OutputData from './components/OutputData'
import Map from './components/LeafletMap'
import { StateProvider } from './components/StateContext';
// global styles
import GlobalStyles from './components/GlobalStyles';


function App() {

  const [load, setLoad] = useState()

  // useEffect(()=> {
  //   return (
  //       <h2>siema</h2>
  //   )
  // },[lat])

  return (
    <div>
      <GlobalStyles />
      <StateProvider>
        <GetWeather />
        <OutputData />
        <Map/>
      </StateProvider>

    </div>
  );
}

export default App;
