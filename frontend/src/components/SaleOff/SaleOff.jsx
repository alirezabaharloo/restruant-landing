// frontend/src/components/SaleOff/SaleOff.jsx
import { useEffect, useState } from "react";
import SaleOffCard from './SaleOffCard.jsx';
import { getOnSaleProducts } from "../../fetch/http.js";

export default function SaleOff() {
  const [onSaleProducts, setOnSaleProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOnSaleProducts() {
      try {
        setIsLoading(true);
        const products = await getOnSaleProducts();
        setOnSaleProducts(products);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch sale products:", err);
        setError("Failed to load sale products");
      } finally {
        setIsLoading(false);
      }
    }

    fetchOnSaleProducts();
  }, []);

  return (
    <section className="max-w-[1180px] mx-auto px-4 mt-12 md:mt-16 lg:mt-24">
      <div className="relative w-max mx-auto mb-8">
        <h2 className="uppercase font-bold text-2xl md:text-3xl lg:text-4xl text-red-600">
          SALE OFF
        </h2> 
        <span className="block w-full h-[6px] absolute bg-[#FFF6A3] bottom-1 z-[-1]"></span>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 my-8">
          {error}
        </div>
      )}
      
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {onSaleProducts.map((product) => (
            <SaleOffCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}