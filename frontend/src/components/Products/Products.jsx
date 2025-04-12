import { useEffect, useRef, useState } from 'react';
import MenuList from './MenuList.jsx';
import { PRODUCTS } from '../../utils.js';
import MenuProduct from './MenuProduct.jsx'
import { fetchProducts } from '../../fetch/http.js'
import Ul from './Ul.jsx'
import { ProductContextProvider } from '../../context/productContext.jsx'

export default function Products(){

  return (
    <section className="md:mt-0  mt-[2rem] max-w-[1180px] mx-auto">
      <ProductContextProvider>
        <div className="relative w-max">
          <h3 className="uppercase  font-bold text-[3rem] text-red1">
            MENU
        </h3> 
        <span className="block w-full h-[9px] absolute bg-[#FFF6A3] bottom-[1rem] z-[-1]"></span>
        </div>
        <MenuList />
        <MenuProduct />
      </ProductContextProvider>
    </section>
  );
}