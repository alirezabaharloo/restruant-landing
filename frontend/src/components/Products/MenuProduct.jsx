import { useEffect, useState } from 'react';
import Ul from './Ul.jsx'
import { fetchProducts } from '../../fetch/http.js';
import MenuProductChild from './MenuProductChild.jsx'

export default function MenuProduct(){
  const [ isFetching, setIsFetching ] = useState(null);
  const [ error, setError ] = useState(false);
  const [ products, setProducts ] = useState([])

  useEffect(()=>{
    setIsFetching(true)
    async function getProducts() {
      try {
        const prdcts = await fetchProducts()
        setProducts(prdcts)

        setIsFetching(false)
      } catch (error) {        
        setError('error from server! no product detected!')
      }
      
    }
    getProducts()
    
    
  }, [])

  return (
    <>
      <Ul 
        className='grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] mt-[1.5rem] gap-[1.5rem]'
        error={error}
        isFetching={isFetching}
        component={MenuProductChild}
      >  
        {
          products
        }

      </Ul>
      {
        isFetching === false && !error ? (
        <div className='w-full flex justify-center mt-[3rem]'>
          <a href="#" className=' font-semibold text-[1.2rem] text-gray2 underline decoration-gray2'>See all</a>
        </div>
        ): undefined
      }
    </>
  );
}