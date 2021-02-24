import React, { createContext, useState } from 'react';
export const Context = createContext();

const Provider = ({ children }) => {
  const LOCALSTORAGE_TOKEN_KEY = 'REMEBERME_TOKEN';
  const [isAuth, setIsAuth] = useState(() => {
    return window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  });

  const value = {
    isAuth,
    setToken: (token) => {
      setIsAuth(true);
      window.localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
    },
    removeToken: () => {
      setIsAuth(false);
      window.localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
