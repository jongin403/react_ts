import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Greetings from './Greetings';
import TopMenu from './TopMenu';

const App = (): JSX.Element => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <Routes>
      <Route path='/topmenu' element={
        <TopMenu name="Hello" onClick={onClick} />
      } />
      <Route path='/' element={<Greetings name="Hello" onClick={onClick} />} />
    </Routes>
  );
};

export default App;