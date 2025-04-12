// context.js  
import React, { createContext, useState } from 'react';  

// Create a Context  
export const productContext = createContext();  

// Create a Provider Component  
export const ProductContextProvider = ({ children }) => {  
  const [basketProducts, setBasketProducts] = useState([]);  

  const addToBasket = (product) => {
    setBasketProducts([...basketProducts, product]);
  };

  const removeFromBasket = (product) => {
    setBasketProducts(basketProducts.filter(p => p.id !== product.id));
  };

  const clearBasket = () => {
    setBasketProducts([]);
  };

  return (  
    <productContext.Provider value={{ basketProducts, addToBasket, removeFromBasket, clearBasket }}>  
      {children}  
    </productContext.Provider>  
  );  
};  


