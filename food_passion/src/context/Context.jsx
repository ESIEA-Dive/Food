// This permits to put all the logic inside one folder

import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  return <AppContext.Provider value='hello'>
    {children}
  </AppContext.Provider> 
};

// This is used to wrap our components with useContext but also AppContext !
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };