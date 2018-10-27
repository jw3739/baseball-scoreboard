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

  calculateBaserunners = () => {
    let totalBaserunners = 0;

    if (this.state.onFirst) {
      totalBaserunners = totalBaserunners + 1;
    } 
    if (this.state.onSecond) {
      totalBaserunners = totalBaserunners + 1;
    } 
    if (this.state.onThird) {
      totalBaserunners = totalBaserunners + 1;
    }
    return totalBaserunners;
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
  handleOut = () => {
    if (this.state.outs < 2) {
      this.setState({
        outs: this.state.outs + 1
      })
    } else {
      this.handleThreeOuts();
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
      this.handleWalk();
      this.setState({
        balls: 0,
        strikes: 0
      })
    }
  }

  handleWalk = () => {
    if (this.state.onFirst === false) {
      this.setState({
        onFirst: true
      }) 
    } else if (this.state.onFirst && this.state.onSecond === false) {
      this.setState({
        onSecond: true
      })
    } else if (this.state.onFirst && this.state.onSecond && this.state.onThird === false) {
      this.setState({
        onThird: true
      })
    } else if (this.state.onFirst && this.state.onSecond && this.state.onThird) {
      if (this.state.bottomInning === false) {
        this.setState({
          teamBScore: this.state.teamBScore + 1
        })
      } else if (this.state.bottomInning) {
        this.setState({
          teamAScore: this.state.teamAScore + 1
        })
      }
    }
  }

  handleHomerun = () => {
    let runsScored = this.calculateBaserunners() + 1;
    
    this.setState ({
      onFirst: false,
      onSecond: false, 
      onThird: false,
      strikes: 0,
      balls: 0
    })

    if (this.state.bottomInning === false) {
      this.setState({
        teamBScore: this.state.teamBScore + runsScored
      })
    } else if (this.state.bottomInning === true) {
      this.setState({
        teamAScore: this.state.teamAScore + runsScored
      })
    }
  }

  handleSacFly = () => {
    this.handleOut();
    if (this.state.onSecond && this.state.onThird === false) {
      this.setState({
        onSecond: false,
        onThird: true
      })
    } 
    if (this.state.onSecond && this.state.onThird) {
      this.setState({
        onSecond: false
      })
        this.sacFlyScore();
    }
    if (this.state.onThird) {
      this.setState({
        onThird: false
      })
      this.sacFlyScore();
    }
  }

  sacFlyScore = () => {
    if (this.state.outs < 2) {
      if (this.state.bottomInning) {
        this.setState({
          teamAScore: this.state.teamAScore + 1
        })
      } else if (this.state.bottomInning === false) {
        this.setState({
          teamBScore: this.state.teamBScore + 1
        })
      }
    }
  }

  handleDouble = () => {
    this.doubleScore();
    if (this.state.onFirst) {
      this.setState({
        onThird: true
      })
    }
    this.setState({
      onFirst: false,
      onSecond: true,
    })
  }

  doubleScore = () => {
    if (this.state.onFirst === false) {
      if (this.state.bottomInning) {
        this.setState({
          teamAScore: this.state.teamAScore + this.calculateBaserunners()
        })
      } else if (this.state.bottomInning === false) {
        this.setState({
          teamBScore: this.state.teamBScore + this.calculateBaserunners()
        })
      }
    } else if (this.state.onFirst) {
      if (this.state.bottomInning) {
        this.setState({
          teamAScore: this.state.teamAScore + this.calculateBaserunners() -1
        })
      } else if (this.state.bottomInning === false) {
        this.setState({
          teamBScore: this.state.teamBScore + this.calculateBaserunners() -1
        })
      }
    }
    
  }

  handleTriple = () => {
    this.tripleScore();
    this.setState({
      onFirst: false,
      onSecond: false
    })
    if (this.state.onThird === false) {
      this.setState({
        onThird: true
      })
    }
  }

  tripleScore = () => {
    if (this.state.bottomInning) {
      this.setState({
        teamAScore: this.state.teamAScore + this.calculateBaserunners()
      })
    } else if (this.state.bottomInning === false) {
      this.setState({
        teamBScore: this.state.teamBScore + this.calculateBaserunners()
      })
    }
  }

  render() {
    return (
      <div className="misc-container">
          <div className='buttons-container'>
            <div className='hits-container'>
              <button>Single</button>
              <button onClick={this.handleDouble}>Double</button>
              <button onClick={this.handleTriple}>Triple</button>
              <button onClick={this.handleHomerun}>Homerun</button>
            </div>
            <div className='pitch-container'>
              <button onClick={this.handleStrike}>Strike</button>
              <button onClick={this.handleBall}>Ball</button>
              <button>Foul</button>
            </div>
            <div className='out-event-container'>
              <button onClick={this.handleOut}>Out</button>
              <button>Doubleplay</button>
              <button>Tripleplay</button>
            </div>
            <div className='misc-event-container'>
              <button>Stolen Base</button>
              <button onClick={this.handleSacFly}>Sac Fly</button>
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
            bottomInning={this.state.bottomInning}
            />
        </div>
      </div>
    );
  }
}

export default BaseballEvents;
