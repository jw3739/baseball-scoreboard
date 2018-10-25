import React, { Component } from 'react';

class InfoBar extends Component {
  render() {
    return (
      <div className="info-bar-container">
        <span className='inning-container'>
            <div className='arrow-container'>
                <div className="arrow-up"></div>
                <div className="arrow-down"></div>
            </div>
            1
        </span>
        <span className='outs-container'>{this.props.outs} Out</span>
        <span className='count-container'>{this.props.balls}-{this.props.strikes}</span>
      </div>
    );
  }
}

export default InfoBar;
