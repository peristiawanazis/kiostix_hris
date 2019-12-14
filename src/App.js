import React from 'react';
import logo from './kiostix_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HRIS for KiosTix
        </p>
        <p className="madeby"> made by ibnu</p>
        <button>Register</button>
       </header>
    </div>
  );
}

export default App;
