import React from 'react'

const Child = (props) => {
    const data="i am from child"
    props.data2(data)
  return (
    <div>
     <p>{data}</p>
     <p>{props.data1}</p>
    </div>
  )
}

export default Child
