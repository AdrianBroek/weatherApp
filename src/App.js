import React, { useState } from "react";
import GetWeather from './components/GetWeather'
import OutputData from './components/OutputData'
import SearchInput from './components/SearchInput'
import { StateProvider } from './components/StateContext';
import Overlay from "./components/Overlay";
// global styles
import GlobalStyles from './components/GlobalStyles';
// style
import styled from "styled-components";


function App() {

  return (
    <Container>
      <GlobalStyles />
      <StateProvider>
        <GetWeather />
        <SearchInput />
        <Overlay />
        <OutputData />
      </StateProvider>
    </Container>
  );
}

const Container = styled.article`
  padding: 3rem 3rem 3rem 3rem;
  width: 100%;
  max-width: 1640px;
  margin: auto;
  @media screen and (max-width: 767px) {
    padding: 3rem 2rem 3rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 3rem .75rem 3rem .75rem;
  }
`

export default App;
