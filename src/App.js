import React, { useState } from "react";
import GetWeather from './components/GetWeather'
import OutputData from './components/OutputData'
import SearchInput from './components/SearchInput'
import { StateProvider } from './components/StateContext';
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
        <OutputData />
      </StateProvider>
    </Container>
  );
}

const Container = styled.article`
  padding: 16rem 3rem 3rem 3rem;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 16rem 2rem 3rem 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 16rem .75rem 3rem .75rem;
  }
`

export default App;
