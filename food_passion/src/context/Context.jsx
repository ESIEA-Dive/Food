// This permits to put all the logic inside one folder

import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({children}) => { 
  
  
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (url) =>   {
    setLoading(true)
    try {
      const {data} = await axios(url)
      if (data.meals) { //here I check if data.meals is true
        setMeals(data.meals)       
      } else { 
        setMeals([])
      }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
  
    useEffect(() => {
      fetchMeals(allMealsUrl)
    },[]);
    
  return (
    <AppContext.Provider value={{loading, meals}}>
    {children}
  </AppContext.Provider> 
  ) 
};

// This is used to wrap our components with useContext but also AppContext !
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };


// 2 ème méthode : BEST ONE out of this 2  ! 
  // const fetchData = async() => {
  //    try {
  //      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  //      const data = await response.json();
  //      console.log(data);
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  }
  
   // It cannot return a promise so no async -> to use async you need to call a function outside or inside useEffect
  // We can use .then or async/await

  //  useEffect(() => { 
  //   fetchData();
  //  })

  // 1er method
  // useEffect (() => {
    
  //   const fetchData = async() => {
  //     try {
  //       const response = await fetch('https://randomuser.me/api/')
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console(error);
  //     }
  //   }
  //   fetchData();
  // },[])
  //