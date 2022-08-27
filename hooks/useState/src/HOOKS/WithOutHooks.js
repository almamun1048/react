import React, { Component } from 'react'

export default class WithOutHooks extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
  handleIncrement = ()=>{
    this.setState({
        count : this.state.count + 1
    })
  } 
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1 style={{color:"green"}}>setState  in class Component</h1>
        <h2>{count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
