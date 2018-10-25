import React, { Component } from 'react';
import Scoreboard from './Scoreboard';

class BaseballEvents extends Component {
  render() {
    return (
      <div className="misc-container">
        <div className='buttons-container'>
            <button>Hit</button>
            <button>Out</button>
        </div>
        <div className='scoreboard-container'>
            <Scoreboard />
        </div>
      </div>
    );
  }
}

export default BaseballEvents;
