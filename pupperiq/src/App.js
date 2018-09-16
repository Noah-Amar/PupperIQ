import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Quiz from './Form/Form';
import Results from './Results';
import Jumbotron from './Header/Jumbotron';
import axios from 'axios';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
      super();
      this.state = {
        sheds: undefined,
        play: undefined,
        activity: undefined,
        affection: undefined,
        train: undefined,
        size: undefined,
        pets: undefined,
        maint: undefined,
        climate: undefined,
        perfectPup: undefined
       }
  }
  render() {
    return (
      <div className="App">
        <Route path='/' component={Jumbotron} />
        <Route exact path='/' component={Header} />
        <Route exact path='/' component={Quiz} />
        <Route exact path='/results' render={props => <Results {...props} pup={this.state.perfectPup} />} />
      </div>
    );
  }

  changeHandler = (event) => {
    const score = parseInt(event.target.value);
    this.setSate(event.target.name: score);
  }


  submitHandler = (event) => {
    event.preventDefault();

    axios.post('http://localhost:4500/results', this.state).then(matches => {
      const matchScores = matches.map(pup => pup.score);
      const lowScore = Math.min(matchScores);
      const perfectPup = matches.filter(pup => pup.score = lowScore);
      this.setState({ perfectPup });
    }).catch(err => {
      console.error(err);
    });
  }
}

export default App;
