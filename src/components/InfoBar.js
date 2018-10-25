import React, { Component } from 'react';

class InfoBar extends Component {
  render() {
    return (
      <div className="info-bar-container">
        <span className='inning-container'>^1</span>
        <span className='outs-container'>0 Out</span>
        <span className='count-container'>0-1</span>
      </div>
    );
  }
}

export default InfoBar;
