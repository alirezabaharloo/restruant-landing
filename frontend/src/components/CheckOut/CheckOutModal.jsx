// frontend/src/components/CheckOut/CheckOutModal.jsx
import { useContext, useState, useEffect } from 'react';
import Modal from '../UI/Modal.jsx';
import { CartProgressContext } from '../../context/CartProgressContext.jsx';
import Input from './Input.jsx';
import validator from 'validator';
import { successMessageNotif } from '../../utils/notif.js';
import { BasketContext } from '../../context/BasketContext.jsx';

export default function CheckOutModal({ isCheckOutOpen }) {
  const { hideModal } = useContext(CartProgressContext);
  const { clearBasketData } = useContext(BasketContext);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Check form validity whenever formData or formErrors change
  useEffect(() => {
    const hasEmptyFields = Object.values(formData).some(value => value === '');
    const hasErrors = Object.values(formErrors).some(error => error !== '');
    setIsFormValid(!hasEmptyFields && !hasErrors);
  }, [formData, formErrors]);

  const validateForm = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'email':
        if (!validator.isEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
        
      case 'cardNumber':
        if (value.replace(/\s/g, '').length !== 16) {
          error = 'card number must be 16 digits';
        }
        break;
        
      case 'expiryDate':
        const [month, year] = value.split('/');
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        if (!month || !year) {
          error = 'Please enter a valid date (MM/YY)';
        } else if (parseInt(month) > 12 || parseInt(month) < 1) {
          error = 'Month must be between 01-12';
        } else if (
          parseInt(year) < currentYear || 
          (parseInt(year) === currentYear && parseInt(month) < currentMonth)
        ) {
          error = 'Card has expired';
        }
        
        break;
        
      case 'cvv':
        if (value.length !== 3 || !/^\d+$/.test(value)) {
          error = 'CVV must be 3 digits';
        }
        break;
    }

    // Update form data and errors
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
    
    return !error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isFormValid) {
      // Process payment
      successMessageNotif("checkout successfully!")
      hideModal();
      // clear basket
      clearBasketData();
    }
  };

  return (
    <Modal open={isCheckOutOpen}>
      <div className='sm:w-[25rem] w-[21rem] p-[1.3rem] text-white absolute left-[-1.3rem] top-[-2.2rem] h-[2.2rem] bg-blue-500 rounded-t-[0.7rem] flex items-center justify-between'>
        <p className='font-semibold'>Checkout</p>
      </div>
      <form onSubmit={handleSubmit} className='pt-[2.5rem] pb-[1.5rem] flex flex-col gap-10 px-4'>
        <Input 
          name="email"
          label="Email"
          type="text"
          error={formErrors.email}
          onValidate={validateForm}
          value={formData.email}
        />
        
        <div className="flex flex-col gap-10">
          <Input 
            name="cardNumber"
            label="Card Number"
            type="text"
            maxLength="19"
            error={formErrors.cardNumber}
            onValidate={validateForm}
            value={formData.cardNumber}
          />
          
          <div className="flex gap-4">
            <div className="flex-1">
              <Input 
                name="expiryDate"
                label="Expiry Date"
                type="text"
                maxLength="5" 
                error={formErrors.expiryDate}
                onValidate={validateForm}
                value={formData.expiryDate}
              />
            </div>
            <div className="flex-1">
              <Input 
                name="cvv"
                label="CVV"
                type="text"
                maxLength="3"
                error={formErrors.cvv}
                onValidate={validateForm}
                value={formData.cvv}
              />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          disabled={!isFormValid}
          className={`w-full font-semibold py-3 rounded-lg 
                   transition-all duration-300 transform 
                   shadow-md flex items-center justify-center gap-2 mt-4
                   ${isFormValid 
                     ? 'bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg text-white cursor-pointer'
                     : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
        >
          <span>Pay Now</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </form>
    </Modal>
  );
}