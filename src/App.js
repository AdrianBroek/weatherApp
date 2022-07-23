import React, { useState } from "react";
import GetWeather from './components/GetWeather'
import OutputData from './components/OutputData'
import SearchInput from './components/SearchInput'
import { StateProvider } from './components/StateContext';
// global styles
import GlobalStyles from './components/GlobalStyles';


function App() {

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
        <SearchInput />
        <OutputData />
      </StateProvider>

    </div>
  );
}

export default App;
