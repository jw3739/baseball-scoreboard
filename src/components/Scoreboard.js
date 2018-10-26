import React, { Component } from 'react';
import TeamScore from './TeamScore';
import Bases from './Bases';
import InfoBar from './InfoBar';

class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <TeamScore 
            teamAScore={this.props.teamAScore}
            teamBScore={this.props.teamBScore} />
        <Bases 
            onFirst={this.props.onFirst}
            onSecond={this.props.onSecond}
            onThird={this.props.onThird} />
        <InfoBar
        outs={this.props.outs}
        balls={this.props.balls}
        strikes={this.props.strikes}
        inning={this.props.inning}
        bottomInning={this.props.bottomInning}
        />
      </div>
    );
  }
}

export default Scoreboard;
