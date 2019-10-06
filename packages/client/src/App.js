import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
import dice from './utils/dice';
import { Col } from './components/common/common';

// import MyForm from './components/my-form';
import CreateCommander from './components/create-commander';
import Home from './components/Home';
/*
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
`*/

const AppContainer = styled.div`
  display: flex;
  background-color: black;

  width: 100%;
  height: 100vh;
`

const SignInContainer = styled.div`
  display: flex;
  background-color: grey;
  margin: auto auto;
  padding: 1rem;
`

function App() {
  // dice();
  // <Navigation />
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create-commander">
            <CreateCommander />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
