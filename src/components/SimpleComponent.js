import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      })} else {
        this.setState({
          mood: "happy"
        })
      }
    }
  

  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}

export default SimpleComponent