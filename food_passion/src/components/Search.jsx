import { useState } from 'react';
import { useGlobalContext } from '../context';

const Search = () => {

  const { setSearch, fetchRandomMeals } = useGlobalContext();
  const [text, setText] = useState(''); // initial value set to empty string

  const handleChange = (e) => {       
    setText(e.target.value);    //This is to get the typed text
  }
  const handleSubmit = (e) => {
    e.preventDefault(); //we this preventDefault it won't refresh the page 
    if(text) {    //if there is text inside the input then do set search
      setSearch(text); 
      // setText(''); This sets back the input to blank after a search
    }
  }

  const handleRandom = () => {
    setSearch('');
    setText('');
    fetchRandomMeals();
  }
  
  // This is where you type ur initial text as value/ but also handle ur change - in <input>
  // In Surprise me we change the onClick to fetch RandomMeals because we are calling it in our handle 

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={text} placeholder='Type your meal' className='form-input'/> 
        <button type='submit' className='btn'>search</button>
        <button type='button' className='btn btn-hipster' onClick={handleRandom}>Surprise me</button> 
      </form>
    </div>
  )
};

export default Search;