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
  /* @media screen and (max-width: 767px){
    width: 80%;
  }
  @media screen and (max-width: 550px){
    width: 90%;
  } */
`

export default App;
