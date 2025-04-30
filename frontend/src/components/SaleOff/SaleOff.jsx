// frontend/src/components/SaleOff/SaleOff.jsx
import Ul from '../UI/Ul.jsx';
import SaleOffCard from './SaleOffCard.jsx';

export default function SaleOff() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 mt-12 md:mt-16 lg:mt-24">
      <div className="relative w-max mx-auto mb-8">
        <h2 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-red-600">
          SALE OFF
        </h2> 
        <span className="block w-full h-[6px] absolute bg-[#FFF6A3] bottom-1 z-[-1]"></span>
      </div>
      
      <Ul
        url="http://localhost:8000/on-sale-products/"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        component={SaleOffCard}
      />
    </section>
  );
}