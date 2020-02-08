import React from 'react';
import './App.css';
import StarWarsNames from './components/StarWarsNames';

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsNames />
    </div>
  );
}

export default App;
