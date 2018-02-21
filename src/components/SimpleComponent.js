// Code SimpleComponentHere Here


import React, {PropTypes} from 'react';

export default class MyComponent extends React.Component {

  state = {
    mood: "happy"
  }

  handleClick = (event) => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      });
    } else {
      this.setState({
        mood: "happy"
      })
    }
  }

  render() {
    return (<div onClick={this.handleClick}>{this.state.mood}</div>);
  }
}
