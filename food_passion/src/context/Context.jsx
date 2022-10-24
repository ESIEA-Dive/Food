// This permits to put all the logic inside one folder

import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';

//1er we get the item (l12), then we parsed it back into array l14 and it doesn't exist just empty array and then we invoc this function
// into useState favorites/setFavorites
const getFavFromLocal = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'))
  }
  else {
    favorites = []
  }
  return favorites
}

const AppProvider = ({children}) => { 
  
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(null);

const [favorites, setFavorites] = useState(getFavFromLocal());

 

  //Here with the localStorage we 
  const addToFav = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFav = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFav) return 
    const updatedFav = [...favorites, meal]
    setFavorites(updatedFav);
    localStorage.setItem('favorites', JSON.stringify(updatedFav));
  }
  // This remove the favorite by excluding the meals with the id Matchning
  const removeFav = (idMeal) => {
    const updatedFav = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFav);
    localStorage.setItem('favorites', JSON.stringify(updatedFav));
  }

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
    
    const deselect = () => {
      setModal(false)
    }

    //We added a logic to fix the problem of not selecting the favorite on different pages. 
    const select = (idMeal, favoriteMeal) => {
      let meal;
      if (favoriteMeal){
      meal = favorites.find((meal) => meal.idMeal === idMeal);
      } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
      }
      setSelected(meal);
      setModal(true);
    }
    
    const fetchRandomMeals =  () => {
      fetchMeals(randomMeal);
    }
    
    useEffect (() => {
      fetchMeals(allMealsUrl);
    }, []);

    useEffect(() => {
      if (!search) return 
      fetchMeals(`${allMealsUrl}${search}`)
    } , [search]);

  return (
    <AppContext.Provider value={{ loading, meals, setSearch, fetchRandomMeals, 
    modal, select , selected, deselect, addToFav, removeFav, favorites }}>
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