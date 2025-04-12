// context.js  
import React, { createContext, useState } from 'react';  
import { updateBasket } from '../fetch/http';

// Create a Context  
export const productContext = createContext();  

// Create a Provider Component  
export const ProductContextProvider = ({ children }) => {  
  const [basket, setBasket] = useState([]);  

  const addToBasket = ({ id, title, price, image_url, quantity }) => {
    // Check if product already exists
    async function updateBasketProducts(params) {
      try {
        const res = await updateBasket(basket)
        console.log(res);
        
        
      } catch (error) {
        console.log(
          'error'
        );
        
        console.log(error);
      }
    }

    const exists = basket.some(p => p.id === id);
    if (!exists) {
      setBasket([...basket, {
        id: id,
        title: title,
        price: price,
        image_url: image_url,
        quantity: quantity,
      }]);
      updateBasketProducts()
    }
   
    console.log(basket);
    
  };

  const removeFromBasket = (productId) => {
    setBasket(basket.filter(product => product.id !== productId));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (  
    <productContext.Provider value={{ 
      basket, 
      addToBasket, 
      removeFromBasket,
      clearBasket
    }}>  
      {children}  
    </productContext.Provider>  
  );  
};
