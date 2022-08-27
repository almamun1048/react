import React from 'react' ;
import Card from './components/Card';

const App = () => {
  
  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card cardTitle="call mother" cardDesc="this is description 1" />
      <Card cardTitle="call father" cardDesc="this is description 2" />
      <Card cardTitle="call brother" cardDesc="this is description 3" />
    </div>
  )
}

export default App
