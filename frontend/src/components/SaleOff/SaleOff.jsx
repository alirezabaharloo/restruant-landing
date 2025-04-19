import { PRODUCTS } from "../../utils/data.js";
import SaleOffProduct from './SaleOffProduct.jsx'

export default function SaleOff(){
    return (
      <section className="max-w-[1180px] mt-[6rem] mx-auto">
        <div className="relative w-max mx-auto flex justify-center items-center">
          <h3 className="uppercase  font-bold text-[3rem] text-red1">
            SALE OFF
          </h3> 
          <span className="block w-full h-[9px] absolute bg-[#FFF6A3] bottom-[1rem] z-[-1]"></span>
        </div>  
        <section className="grid grid-cols-[repeat(auto-fit,minmax(350px,auto))] mt-[3rem] justify-center items-center gap-[1rem]">
          {
            PRODUCTS.slice(0, 3).map((product, index)=>{
              return (
                <SaleOffProduct key={index} index={index} {...product}  />
              )
            })
          }
        </section>
      </section>
    );
}