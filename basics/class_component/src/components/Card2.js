import React, { Component } from 'react';

export default class Card2 extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.cardName}</h1>
      <h3>{this.props.cardDes}</h3>
      </div>
    )
  }
}
