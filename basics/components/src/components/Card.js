import React from 'react';

const Card = () => {

  const todoTitle = "call family";
  const todoDesc = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const yearName = date.getFullYear();


  return (

     <div className='card'>
        <h1 className='headingStyle'>Todo App</h1>
        <h3 className='cardTitle'>{todoTitle}</h3>
        <p className='cardDesc'>{todoDesc}</p>
        <p className='cardFooter'>{dateName + " / " + monthName + " / " + yearName}</p>
      </div>
  )
}

export default Card;
