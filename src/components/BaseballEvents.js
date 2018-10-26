import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class BaseballEvents extends Component {
  constructor() {
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      outs: 0,
      onFirst: false,
      onSecond: false,
      onThird: false,
      teamAScore: 0,
      teamBScore: 0,
      bottomInning: false,
      inning: 1
    };
  }
  handleThreeOuts = () => {
    this.setState({
      strikes: 0,
      balls: 0,
      outs: 0,
      onFirst: false,
      onSecond: false,
      onThird: false,
    })
    if (this.state.bottomInning === false) {
      this.setState({
        bottomInning: true
      })
    } else {
      this.setState({
        bottomInning: false,
        inning: this.state.inning + 1
      })
    }
  }

  handleStrike = () => {
    if (this.state.strikes < 2) {
      this.setState({
        strikes: this.state.strikes + 1
      })
    } else if (this.state.outs < 2){
      this.setState({
        strikes: 0,
        balls: 0,
        outs: this.state.outs + 1
      })
    } else {
      this.handleThreeOuts();
    }
  }
  handleBall = () => {
    if (this.state.balls < 3) {
      this.setState({
        balls: this.state.balls + 1
      })
    } else {
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
  }
  render() {
    return (
      <div className="misc-container">
          <div className='buttons-container'>
            <div className='hits-container'>
              <button>Single</button>
              <button>Double</button>
              <button>Triple</button>
              <button>Homerun</button>
            </div>
            <div className='pitch-container'>
              <button onClick={this.handleStrike}>Strike</button>
              <button onClick={this.handleBall}>Ball</button>
              <button>Foul</button>
            </div>
            <div className='out-event-container'>
              <button>Out</button>
              <button>Doubleplay</button>
              <button>Tripleplay</button>
            </div>
            <div className='misc-event-container'>
              <button>Stolen Base</button>
              <button>Sac Fly</button>
              <button>Pickoff</button>
            </div> 
         </div>
        <div className='scoreboard-container'>
            <Scoreboard 
            teamAScore={this.state.teamAScore}
            teamBScore={this.state.teamBScore}
            onFirst={this.state.onFirst}
            onSecond={this.state.onSecond}
            onThird={this.state.onThird}
            outs={this.state.outs}
            balls={this.state.balls}
            strikes={this.state.strikes}
            inning={this.state.inning}
            />
        </div>
      </div>
    );
  }
}

export default BaseballEvents;
