function getCsrfToken() {
  // getting csrf token (it is necessary for using drf sessions)
  return document.cookie.split('; ')
    .find(row => row.startsWith('csrftoken='))
    ?.split('=')[1];
}

function showError({ resData, errorMessage }){
  const error = typeof resData === 'object' 
        ? Object.entries(resData).map(([key, value]) => `${key}: ${value}`).join('\n')
        : resData.toString();
  console.log(errorMessage, error);
  throw new Error(errorMessage, error);
}


export async function fetchProducts(){
  const res = await fetch("http://localhost:8000/products/", {
    credentials: 'include',
  })
  const resData = await res.json()  

  if (!res.ok) {
    showError({ resData, errorMessage: 'not products! error from server!' });
  }

  return resData
}


export async function fetchMenuList(){
  const res = await fetch("http://localhost:8000/product-categories/", {
    credentials: 'include',
  })
  const resData = await res.json()

  if (!res.ok) {
    showError({ resData, errorMessage: 'not products! error from server!' });
  }

  return resData
}

export async function fetchBasket() {
  const res = await fetch("http://localhost:8000/basket/", {
    credentials: 'include',
    headers: {
      'X-CSRFToken': getCsrfToken(),
    },
  })
  const resData = await res.json()

  if (!res.ok) {
    showError({ resData, errorMessage: 'not basket data! error from server!' });
  }

  return resData
}

export async function updateBasket(product) {
  const res = await fetch("http://localhost:8000/basket/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify(product),
    credentials: 'include',
  })
  const resData = await res.json()

  if (!res.ok) {
    showError({ resData, errorMessage: 'Failed to update basket' });
  }
  return resData
}

export async function removeBasket(productID) {
  const res = await fetch(`http://localhost:8000/basket/${productID}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    credentials: 'include',
  })

  if (!res.ok) {
    let resData;
    try {
      resData = await res.json();
    } catch (e) {
      resData = 'Failed to parse error response';
    }
    showError({ resData, errorMessage: 'Failed to remove item from basket' });
  }

  return { success: true };
}

export async function clearBasket() {
  const res = await fetch("http://localhost:8000/clear-basket/", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    credentials: 'include',
  })
  const resData = await res.json()

  if (!res.ok) {
    showError({ resData, errorMessage: 'Failed to update basket' });
  }

  return resData
}

export async function updateBasketItemQuantity(productId, quantity) {
  const res = await fetch(`http://localhost:8000/basket/${productId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify({ quantity }),
    credentials: 'include',
  });
  
  const resData = await res.json();

  if (!res.ok) {
    showError({ resData, errorMessage: 'Failed to update quantity' });
  }

  return resData;
}


export async function checkOut({email, card_number, card_expire_date, card_cvv}) {
  const res = await fetch('http://localhost:8000/checkout/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCsrfToken(),
    },
    body: JSON.stringify({
      email,
      card_number,
      card_expire_date,
      card_cvv,
    }),
    credentials: 'include'
  });

  const resData = await res.json();

  if (!res.ok) {
    showError({resData, errorMessage: "Faild to checkout basket products!"});
  }

  return resData;
}

export async function getOnSaleProducts() {
  const res = await fetch('http://localhost:8000/on-sale-products/');

  const resData = await res.json();

  if (!res.ok) {
    showError({resData, errorMessage: "Faild to get on sale products!"});
  }

  return resData
}