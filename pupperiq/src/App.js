import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Quiz from './Form/Form';
import Jumbotron from './Header/Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Quiz />
      <Jumbotron />
      </div>
    );
  }
}

export default App;
