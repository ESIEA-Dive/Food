import React from 'react';

import { Favorite, Meals, Modal, Search } from './components';
import './App.css'

function App() {

  return (
    <div className="App">
      <Search />
      <Favorite />
      <Meals />
      <Modal />
    </div>
  )
}

export default App
