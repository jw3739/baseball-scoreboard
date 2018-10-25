import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class BaseballEvents extends Component {
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
            <Scoreboard />
        </div>
      </div>
    );
  }
}

export default BaseballEvents;
