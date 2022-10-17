import React, { Component } from 'react'

export default class CurrentTime extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
      time: this.state.date.getHours() + ' : ' + (this.state.date.getMinutes()<10?'0'+this.state.date.getMinutes():this.state.date.getMinutes())
    });
  }

  render() {
    return (
      <><p className='time'>{this.state.time}</p></>
    )
  }
}