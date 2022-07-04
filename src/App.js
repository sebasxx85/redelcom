import React from 'react';
import './App.css';
import Saludos from './components/Saludos';

function App() {

  const edad = 36;

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Saludos name="seba" edad = {edad}/>
        </p>
       
      </header>
    </div>
  );
}

export default App;
