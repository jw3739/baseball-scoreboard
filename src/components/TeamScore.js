import React, { Component } from 'react';


class TeamScore extends Component {
    
  render() {
    return (
      <div className="team-score-container">
        <div className='team team-1'>
            <span className='team-name'>BOS</span> 
            <span className='score'>{this.props.teamAScore}</span>
        </div>
        <div className='team team-2'>
            <span className='team-name'>LAD</span> 
            <span className='score'>{this.props.teamBScore}</span>
        </div>
      </div>
    );
  }
}

export default TeamScore;
