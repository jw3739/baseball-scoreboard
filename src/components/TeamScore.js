import React, { Component } from 'react';

class TeamScore extends Component {
  render() {
    return (
      <div className="team-score-container">
        <div className='team team-1'>
            <span className='team-name'>BOS</span> 
            <span className='score'>1</span>
        </div>
        <div className='team team-2'>
            <span className='team-name'>LA</span> 
            <span className='score'>0</span>
        </div>
      </div>
    );
  }
}

export default TeamScore;
