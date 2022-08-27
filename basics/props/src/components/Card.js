import React from 'react';

const Card = (props) => {
  const {cardTitle,cardDesc} = props;
  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const yearName = date.getFullYear();


  return (
    <div className='card'>
        <h3 className='cardTitle'>{cardTitle}</h3>
        <p className='cardDesc'>{cardDesc}</p>
        <p className='cardFooter'>{dateName + " / " + monthName + " / " + yearName}</p>
    </div>
  )
}

export default Card;
