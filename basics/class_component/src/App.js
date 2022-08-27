import React from 'react';
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

const App = () => {
  return (
    <div>
      <Card1 cardName="Card1" cardDes="this is function component" />
      <Card2 cardName="Card2" cardDes="this is class component" />
    </div>
  )
}

export default App;
