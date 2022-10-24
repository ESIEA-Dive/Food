import React from 'react';

import { Favorite, Meals, Modal, Search } from './components';
import './App.css'
import { useGlobalContext } from './context';

function App() {

  const { modal, favorites } = useGlobalContext();

  return (
    <div className="App">
      <Search />
      { favorites.length > 0 && <Favorite /> } 
      <Meals />
      {modal && <Modal />} 
    </div>
  )
}

export default App;

// for modal and favorites :
// This only shows the favorite when the length of the array favorites is > 0
// This only show when the modal is true