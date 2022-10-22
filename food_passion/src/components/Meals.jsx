// import React, { useContext } from 'react'; This is not necessary anymore
// import { AppContext } from '../context'; This is the right one
import { useGlobalContext } from '../context';
const Meals = () => {

  const context = useGlobalContext()
  console.log(context)

  return (
    <div>Meals</div>
  )
};

export default Meals;