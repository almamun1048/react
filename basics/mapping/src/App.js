import React from 'react' ;
import Card from './components/Card';
import Data from './data.json';

const App = () => {
  
  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
    { Data.map((item,index)=><Card key={index} cardTitle = {item.title} cardDesc = {item.description} />)}
    </div>
  )
}

export default App ;
