import React from 'react';

import { Favorite, Meals, Modal, Search } from './components';
import './App.css'
import { useGlobalContext } from './context';

function App() {

  const { modal } = useGlobalContext();

  return (
    <div className="App">
      <Search />
      {/* <Favorite /> */}
      <Meals />
      {modal && <Modal />} 
    </div>
  )
}

export default App;
