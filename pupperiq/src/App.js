import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Quiz from './Form/Form';
import Jumbotron from './Header/Jumbotron';
import FirstFive from './Form/5radios';
import TrueFalse from './Form/2radios';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Jumbotron />
      <FirstFive />
      <TrueFalse />
      </div>
    );
  }
}

export default App;
