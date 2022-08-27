import React from 'react' ;
import Card from './components/Card';
import Data from './data.json';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  
  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
    { Data.map((item)=><Card key={uuidv4()} cardTitle = {item.title} cardDesc = {item.description} />)}
    </div>
  )
}

export default App ;
