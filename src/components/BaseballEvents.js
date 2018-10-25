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
      teamBScore: 0
    };
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
              <button>Strike</button>
              <button>Ball</button>
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
            />
        </div>
      </div>
    );
  }
}

export default BaseballEvents;
