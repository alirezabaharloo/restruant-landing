import axios from "axios"

export async function fetchProducts(){
  const res = await fetch("http://localhost:8000/products/")
  const resData = await res.json()  

  if (!res.ok) {
    throw new Error('not products! error from server!')
  }

  return resData
}


export async function fetchMenuList(){
  const res = await fetch("http://localhost:8000/product-categories/")
  const resData = await res.json()

  if (!res.ok) {
    throw new Error('not products! error from server!')
  }

  return resData
}

export async function fetchBasket() {
  const res = await fetch("http://localhost:8000/basket/")
  const resData = await res.json()

  if (!res.ok) {
    throw new Error('not basket data! error from server!')
  }

  return resData
}

export async function updateBasket(product) {
  const res = await fetch("http://localhost:8000/basket/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  const resData = await res.json()

  if (!res.ok) {
    const errorMessage = typeof resData === 'object' 
      ? Object.entries(resData).map(([key, value]) => `${key}: ${value}`).join('\n')
      : resData.toString();
    throw new Error(`Failed to update basket:\n${errorMessage}`);
  }

  return resData
}

export async function removeBasket(productID) {
  const res = await fetch(`http://localhost:8000/basket/${productID}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  if (!res.ok) {
    let errorMessage;
    try {
      const resData = await res.json();
      errorMessage = typeof resData === 'object' 
        ? Object.entries(resData).map(([key, value]) => `${key}: ${value}`).join('\n')
        : resData.toString();
    } catch (e) {
      errorMessage = 'Failed to parse error response';
    }
    throw new Error(`Failed to remove item from basket:\n${errorMessage}`);
  }

  return { success: true };
}

export async function clearBasket() {
  const res = await fetch("http://localhost:8000/clear-basket/", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const resData = await res.json()

  if (!res.ok) {
    const errorMessage = typeof resData === 'object' 
      ? Object.entries(resData).map(([key, value]) => `${key}: ${value}`).join('\n')
      : resData.toString();
    throw new Error(`Failed to update basket:\n${errorMessage}`);
  }

  return resData
}