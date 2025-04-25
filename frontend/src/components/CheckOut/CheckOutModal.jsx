// frontend/src/components/CheckOut/CheckOutModal.jsx
import { useContext, useState, useEffect } from 'react';
import Modal from '../UI/Modal.jsx';
import Input from './Input.jsx';
import { BasketContext } from '../../context/BasketContext.jsx';
import { CartProgressContext } from '../../context/CartProgressContext.jsx';
import { formValidation } from '../../utils/validation.js';

export default function CheckOutModal({ isCheckOutOpen }) {
  const { checkOutBasket } = useContext(BasketContext);
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    cardExpireDate: '',
    cardCvv: ''
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    cardNumber: '',
    cardExpireDate: '',
    cardCvv: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const { hideModal } = useContext(CartProgressContext);

  // Check form validity whenever formData or formErrors change
  useEffect(() => {
    const hasEmptyFields = Object.values(formData).some(value => value === '');
    const hasErrors = Object.values(formErrors).some(error => error !== '');
    setIsFormValid(!hasEmptyFields && !hasErrors);
  }, [formData, formErrors]);

  const validateForm = (name, value) => {
    const error = formValidation(name, value)

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isFormValid) {
      const response = checkOutBasket(formData);
      if (response) {
        hideModal();
      }
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
                name="cardExpireDate"
                label="Expiry Date"
                type="text"
                maxLength="5"
                error={formErrors.cardExpireDate}
                onValidate={validateForm}
                value={formData.cardExpireDate}
              />
            </div>
            <div className="flex-1">
              <Input 
                name="cardCvv"
                label="CVV"
                type="text"
                maxLength="3"
                error={formErrors.cardCvv}
                onValidate={validateForm}
                value={formData.cardCvv}
              />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          disabled={!isFormValid}
          className={`w-full font-semibold py-3 rounded-lg 
                   transition-all duration-300 transform 
                   shadow-md flex items-center justify-center gap-2
                   ${isFormValid
                     ? 'bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg text-white cursor-pointer' 
                     : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
        >
          <span>checkout</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </form>
    </Modal>
  );
}