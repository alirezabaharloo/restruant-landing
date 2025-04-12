
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

export async function fetchBasket(params) {
  const res = await fetch("http://localhost:8000/basket/")
  const resData = await res.json()

  if (!res.ok) {
    throw new Error('not basket data! error from server!')
  }

  return resData
}

export async function updateBasket(basketProducts) {
  const res = await fetch("http://localhost:8000/basket/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(basketProducts)
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


