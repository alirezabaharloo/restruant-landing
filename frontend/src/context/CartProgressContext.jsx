import React, { createContext, useState } from 'react';

export const CartProgressContext = createContext({
  progress: "",
  showBasket: () => {},
  showCheckOut: () => {},
  hideModal: () => {},
});

export const CartProgressContextProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const showBasket = () => {
    setProgress("basket"); 
  }
  
  const showCheckOut = () => {
    setProgress("checkout");
  }
    
  const hideModal = () => {
    setProgress("");
  }


  const contextValue = {
    progress,
    showBasket,
    showCheckOut,
    hideModal,
  }

  return (
    <CartProgressContext.Provider value={contextValue} >
      {children}
    </CartProgressContext.Provider>
  );
};


