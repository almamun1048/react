import React from 'react'

const Card1 = (props) => {
  return (
    <div>
      <h1>{props.cardName}</h1>
      <h3>{props.cardDes}</h3>
    </div>
  )
}

export default Card1
