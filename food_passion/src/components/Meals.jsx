// import React, { useContext } from 'react'; This is not necessary anymore
// import { AppContext } from '../context'; This is the right one
import { useGlobalContext } from '../context';
import { BsHandThumbsUp } from 'react-icons/bs'


const Meals = () => {

  const {loading, meals, select, addToFav} = useGlobalContext();

  if(loading) {
    return <section className='section'>
      <h4>Loading...</h4>
    </section>
  }

  if ( meals.length < 1) {
    return <section className='section'>
      <h4>Oops no meals matched ! Please try another one. </h4>
    </section>
  }
  return (
    <section className='section-center'>
      {meals.map ((singleMeal) => {                                         // in map you can pass .map((argument, index)) and key this index
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal; //Call the value we are gonna use and give alias to be simple

        return <div key={idMeal} className='single-meal'>
          <img src={image} className='img' onClick={() => select(idMeal)} /> 
          <footer>
            <h5>{title}</h5>
            <button className='like-btn' onClick={() => addToFav(idMeal)}><BsHandThumbsUp /></button>
          </footer>
        </div>
      })

      }
      </section>
  )
};

export default Meals;

// onClick={select(idMeal)} This is not the right way to do it because you invoc it right away
// You need () => select(idMeal) so it works on click