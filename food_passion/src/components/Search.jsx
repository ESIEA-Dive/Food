import React, { useState } from 'react';
import { useGlobalContext } from '../context';

const {loading, meals} = useGlobalContext();

const Search = () => {
  return (
    <div className='search-container'>
      <form>
        <input type='text' placeholder='Type your meal' />
        <button type='submit' className='btn'>search</button>
        <button type='button' className='btn btn-hipster '>Surprise me</button>
      </form>
    </div>
  )
};

export default Search;