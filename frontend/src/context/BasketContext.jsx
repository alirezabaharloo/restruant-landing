import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  removeBasket, 
  updateBasket, 
  clearBasket, 
  fetchBasket,
  updateBasketItemQuantity, 
  checkOut
} from '../fetch/http';
import { infoMessageNotif, errorMessageNotif, successMessageNotif } from '../utils/notif';
import { CartProgressContext } from './CartProgressContext';

export const BasketContext = createContext({
  basket: [],
  addToBasket: () => [],
  removeFromBasket: () => [], 
  checkOutBasket: () => [],
  onDecreaseQuantity: () => [],
  onIncreaseQuantity: () => [],
});

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // Initialize basket from API
  useEffect(() => {
    const initializeBasket = async () => {
      setIsLoading(true);
      try {
        const basketData = await fetchBasket();
        setBasket(basketData);
      } catch (error) {
        console.error('Failed to initialize basket:', error);
        errorMessageNotif('Failed to load your basket');
        setBasket([]);
      } finally {
        setIsLoading(false);
      }
    };

    initializeBasket();
  }, []);

  const addToBasket = async ({ id, title, quantity }) => {
    try {
      const exists = basket.find(product => product.id === id);
      
      if (!exists) {
        const product = await updateBasket({
          id, 
          quantity,
        });
        
        const updatedBasket = [
          ...basket,
          { ...product }
        ];

        setBasket(updatedBasket);
        successMessageNotif(`Added ${quantity} ${title} to basket!`);
      } else {
        infoMessageNotif(`${title} has already been added to your basket!`);
      }
    } catch (error) {
      console.error('Failed to add product to basket:', error);
      errorMessageNotif('Failed to add product to basket');
    }
  };

  const removeFromBasket = async (productId) => {
    const exists = basket.find(product => product.id === productId);
    if (exists) {
      try {
        await removeBasket(productId);
        const updatedBasket = basket.filter(product => product.id !== productId);
        setBasket(updatedBasket);
      } catch (error) {
        console.error('Failed to remove product from basket:', error);
        errorMessageNotif('Failed to remove item from basket');
      }
    }
  };

  const onDecreaseQuantity = async (productId) => {
    try {
      const product = basket.find(p => p.id === productId);
      if (!product) return;

      if (product.quantity <= 1) return;

      const newQuantity = product.quantity - 1;
      await updateBasketItemQuantity(productId, newQuantity);
      
      const updatedBasket = basket.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: newQuantity
          };
        }
        return product;
      });
      
      setBasket(updatedBasket);
    } catch (error) {
      console.error('Failed to decrease quantity:', error);
      errorMessageNotif('Failed to update quantity');
    }
  };

  const onIncreaseQuantity = async (productId) => {
    try {
      const product = basket.find(p => p.id === productId);
      if (!product) return;

      const newQuantity = product.quantity + 1;

      if (newQuantity >= product.max_quantity) return;

      await updateBasketItemQuantity(productId, newQuantity);
      
      const updatedBasket = basket.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: newQuantity
          };
        }
        return product;
      });
      
      setBasket(updatedBasket);
    } catch (error) {
      console.error('Failed to increase quantity:', error);
      errorMessageNotif('Failed to update quantity');
    }
  };

  const checkOutBasket = async (formData) => {
    try {
      await checkOut({
        email: formData.email,
        card_number: formData.cardNumber.replace(/\s/g, ""),
        card_expire_date: formData.cardExpireDate,
        card_cvv: formData.cardCvv,
      });
      setBasket([]);
      successMessageNotif('Basket cleared successfully');
      return true
    } catch (error) {
      console.error('Failed to checkout basket:', error);
      errorMessageNotif('Failed to checkout basket');
      return false
    }
  };

  const contextValue = {
    basket,
    isLoading,
    addToBasket,
    removeFromBasket, 
    onDecreaseQuantity,
    onIncreaseQuantity,
    checkOutBasket,
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {children}
    </BasketContext.Provider>
  );
};
