import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         inputValue : ''
      }
    }
    
    onChangeHandler = (e) => {
        this.setState({
            inputValue : e.target.value
        },()=>{
            console.log(this.state.inputValue)
        })
    }


  render() {
    return (
      <div>
            <input type='text' onChange={this.onChangeHandler}/>
      </div>
    )
  }
}
