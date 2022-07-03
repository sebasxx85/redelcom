import React from 'react';
import './App.css';
import Saludos from './components/Saludos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Saludos name="seba"/>
        </p>
       
      </header>
    </div>
  );
}

export default App;
