// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      mood: 'happy'
    }
  }

  handleClick(){
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }

  render() {
    console.log(this.state)
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}
