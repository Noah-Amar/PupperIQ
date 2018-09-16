import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Results from './Results';
import FirstFive from './Form/5radios';
import TrueFalse from './Form/2radios';
import axios from 'axios';
import {Route, withRouter} from 'react-router-dom';

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
        <Route exact path='/' component={Header} />
        <Route exact path='/' render={props =>  <FirstFive {...props} change={this.changeHandler} />} />
        <Route exact path='/' render={props => <TrueFalse {...props} submit={this.submitHandler} change={this.changeHandler} />} />
        <Route exact path='/results' render={props => <Results {...props} pup={this.state.perfectPup} />} />
      </div>
    );
  }

  changeHandler = (event) => {
    const score = parseInt(event.target.value);
    this.setState({[event.target.name]: score});
  }


  submitHandler = (event) => {
    event.preventDefault();

    axios.post('http://localhost:4500/results', this.state).then(matches => {
      const matchScores = matches.data.map(pup => pup.score);
      const lowScore = Math.min(matchScores);
      const perfectPup = matches.data.filter(pup => pup.score = lowScore);
      this.setState({ perfectPup: perfectPup[0] });
      this.props.history.push('/results');
      console.log(this.state);
    }).catch(err => {
      console.error(err);
    });
  }
}

export default withRouter(App);
