import React, { createContext, useState } from 'react';
import { removeBasket, updateBasket, clearBasket } from '../fetch/http';
import { addProductNotif, addProductErrorNotif, checkOutBasketNotif, productExistsNotif } from '../utils/notif';

export const BasketContext = createContext({
  basket: [],
  addToBasket: () => [],
  removeFromBasket: () => [], 
  checkOutBasket: () => [],
  onDecreaseQuantity: () => [],
  onIncreaseQuantity: () => [],
});

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem('basket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  const addToBasket = async ({ id, title, price, image_url, itemCount, quantity }) => {
    try {
      const exists = basket.find(product => product.id === id);
      
      if (!exists) {
        const product = await updateBasket({
          id,
          title,
          price, 
          image_url,
        });
        
        const updatedBasket = [
          ...basket,{
            ...product,
          }
        ]

        setBasket(updatedBasket);

        localStorage.setItem('basket', JSON.stringify(updatedBasket));

        // Show add notification
        addProductNotif(`Added ${itemCount} ${title} to basket!`)

      } else {
        // show product exists notification
        productExistsNotif(`${title} has already been added to your basket!`)
      }
    } catch (error) {
      console.error('Failed to add product to basket:', error);
      // show error notification
      addProductErrorNotif('Failed to add product to basket')
    }
  };

  const removeFromBasket = async (productId) => {
    const exists = basket.find(product => product.id === productId);
    if (exists) {
      try {
        setBasket((prevBasket) => {
          const updatedBasket = prevBasket.filter(product => product.id !== productId);
          localStorage.setItem('basket', JSON.stringify(updatedBasket));
          return updatedBasket
        });
        
        // update data in db
        await removeBasket(productId);
        
      } catch (error) {
        console.error('Failed to remove product from basket:', error);
      }
    }
  };

  const onDecreaseQuantity = (productId) => {
    setBasket(prevBasket=>{
      const updatedBasket = prevBasket.map(product=>{
        if (product.id === productId) {
          return {
            ...product,
            itemCount: product.itemCount > 1 ? product.itemCount - 1 : product.itemCount
          }
        }
        return product
      })

      // update data in localstrage
      localStorage.setItem('basket', JSON.stringify(updatedBasket))
      
      return updatedBasket
    
    })
  }


  const onIncreaseQuantity = (productId) => {
    setBasket(prevBasket=>{
      const updatedBasket = prevBasket.map(product=>{
        if (product.id === productId) {
          return {
            ...product,
            itemCount: product.itemCount < product.quantity ? product.itemCount + 1 : product.itemCount
          }
        }
        return product
      })

      // update data in localstrage
      localStorage.setItem('basket', JSON.stringify(updatedBasket))
      
      return updatedBasket
    
    })
  }

  const contextValue = {
    basket,
    addToBasket,
    removeFromBasket, 
    onDecreaseQuantity,
    onIncreaseQuantity,
  }

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
