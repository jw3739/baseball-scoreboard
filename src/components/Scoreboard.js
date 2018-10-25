import React, { Component } from 'react';
import TeamScore from './TeamScore';
import Bases from './Bases';
import InfoBar from './InfoBar';

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <TeamScore />
        <Bases />
        <InfoBar />
      </div>
    );
  }
}

export default Scoreboard;
