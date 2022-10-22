// This permits to put all the logic inside one folder

import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) => { 
  
  const fetchData = async() => {
     try {
       const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console(error);
     }
   }
  
   // It cannot return a promise so no async -> to use async you need to call a function outside or inside useEffect
  // We can use .then or async/await

   useEffect(() => { 
    fetchData();
   })

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

  return <AppContext.Provider value='hello'>
    {children}
  </AppContext.Provider> 
};

// This is used to wrap our components with useContext but also AppContext !
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };