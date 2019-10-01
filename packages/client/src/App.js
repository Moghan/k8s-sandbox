import React from 'react';

import logo from './logo.svg';
import './App.css';
import dice from './utils/dice';

import MyForm from './components/my-form';

function App() {
  dice();
  return (
    <div className="App">
      <MyForm />      
    </div>
  );
}

export default App;
