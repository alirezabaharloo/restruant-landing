
export const formValidation = (name, value) => {
  let error = '';
    
  switch (name) {
    case 'email':
      if (!value) {
        error = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Please enter a valid email address';
      }
      break;
      
    case 'cardNumber':
      if (!value) {
        error = 'Card number is required';
      } else if (value.replace(/\s/g, '').length !== 16) {
        error = 'Card number must be 16 digits';
      } else if (!/^\d+$/.test(value.replace(/\s/g, ''))) {
        error = 'Card number must contain only digits';
      }
      break;
      
    case 'cardExpireDate':
      if (!value) {
        error = 'Expiry date is required';
      } else {
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
      }
      break;
      
    case 'cardCvv':
      if (!value) {
        error = 'CVV is required';
      } else if (value.length !== 3 || !/^\d+$/.test(value)) {
        error = 'CVV must be 3 digits';
      }
      break;
  }

  return error
}


export const valueFormatation = (name, input) => {
  switch (name) {
    case 'cardNumber':
      return input.replace(/\s/g, "").replace(/[a-zA-Z]+/g, "").replace(/(\d{4})/g, "$1 ").trim();
    case 'cardExpireDate':
      let digits = input.replace(/\D+/g, "")
      if (digits.length <= 2) {
        return digits
      }
      return digits.slice(0, 2) + "/" + digits.slice(2, 4)
    case 'cardCvv':
      return input.replace(/\D/g, "");
    default:
      return input;
  }
}