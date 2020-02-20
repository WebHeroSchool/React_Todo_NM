import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const style ={
    color: 'pink'
  };
  const myVar = 'This is my variable';
  const myNumber = 27;
  const otherNumber = 72;
  const boolVar = true;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
              Hello World !! Hello Web Hero School !!!
          </p>
        <div className="Jsx-lesson">
          <p style={style}>This is style object</p>
          <p>{myVar}</p>
          <p>{myNumber}</p>
          <p>{myNumber + otherNumber}</p>
          <p>{boolVar && 'This is logical operation'}</p>
          <p>{boolVar ? 'This is true': 'This is false'}</p>
          <p>undefined: {undefined}, null: {null}, false: {false}, true: {true}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
