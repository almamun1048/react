import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn : false
      }
    }
    
  render() {
   const {isLogedIn} = this.state ;
    return (
      <div>
        { isLogedIn ? <HomePage /> : <LoginPage />}
      </div>
    )
  }
}
