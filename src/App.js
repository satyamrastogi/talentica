import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Talentica from './components/Talentica';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Talentica></Talentica>
      </div>
    </Router>
  );
}

export default App;
