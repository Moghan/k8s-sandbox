import React from 'react';
import styled from 'styled-components';

// import logo from './logo.svg';
import './App.css';
import dice from './utils/dice';

// import MyForm from './components/my-form';
import CreateCommander from './components/create-commander';

const getWidthString = (span) => {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%`;
}

const Col = styled.div`
  float: left;
  ${({ xs }) => xs ? getWidthString(xs) : "width: 100%"};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`

const AppContainer = styled.div`
  display: flex;

  width: 80vw;
  height: 60vh;
  margin: auto auto;

`

function App() {
  // dice();
  return (
    <AppContainer>
      <Col xs="1" md="4" />
      <CreateCommander />      
    </AppContainer>
  );
}

export default App;
