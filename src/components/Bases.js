import React, { Component } from 'react';

class Bases extends Component {
  render() {
    return (
      <div className="bases-container">
        <div className='base-positioning'>
            <div className={this.props.onSecond ? 'base active' : 'base inactive'}></div>
            <div className={this.props.onFirst ? 'base active' : 'base inactive'}></div>
            <div className={this.props.onThird ? 'base active' : 'base inactive'}></div>
        </div>
      </div>
    );
  }
}

export default Bases;
