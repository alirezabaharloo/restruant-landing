// frontend/src/components/SaleOff/SaleOffCard.jsx
import { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext.jsx';

export default function SaleOffCard({ id, title, price, image_url, price_with_discount, description }) {
  const { addToBasket } = useContext(BasketContext);

  // Clean title and extract category
  const displayTitle = title.toUpperCase();
  const productCategory = 'Fast food';
  
  // Get a background color based on whether it has a discount
  const bgColor = price_with_discount ? 'bg-gradient-to-br from-red-600 to-red-700' : 'bg-gradient-to-br from-gray-50 to-gray-100';
  const textColor = price_with_discount ? 'text-yellow-300' : 'text-red-600';
  const categoryColor = price_with_discount ? 'text-white' : 'text-gray-600';
  const descriptionColor = price_with_discount ? 'text-white' : 'text-gray-700';

  return (
    <div className={`
      ${bgColor} 
      rounded-xl overflow-hidden 
      shadow-lg hover:shadow-2xl 
      transform hover:-translate-y-1 
      transition-all duration-300
      group
    `}>
      <div className="p-6 relative">
        {/* Category */}
        <div className={`${categoryColor} text-sm font-medium mb-2 opacity-90`}>
          {productCategory}
        </div>
        
        {/* Title */}
        <h3 className={`${textColor} font-bold text-xl md:text-2xl mb-2 group-hover:scale-105 transition-transform duration-300`}>
          {displayTitle}
        </h3>
        
        {/* Description */}
        <p className={`${descriptionColor} text-sm mb-4 line-clamp-2 opacity-90`}>
          {description}
        </p>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-5">
          {price_with_discount ? (
            <>
              <span className="text-white/80 line-through text-sm">{price}$</span>
              <span className={`${textColor} font-bold text-2xl`}>{price_with_discount}$</span>
            </>
          ) : (
            <>
              <span className="text-gray-500 line-through text-sm">{price}$</span>
              <span className="text-red-600 font-bold text-2xl">{(price * 0.75).toFixed(1)}$</span>
            </>
          )}
        </div>
        
        {/* Order Button */}
        <button 
          onClick={()=>addToBasket({id, title, quantity: 1})}
          className={`
            flex items-center gap-2 rounded-full px-5 py-2.5
            ${price_with_discount 
              ? 'bg-white text-gray-800 hover:bg-gray-100 hover:scale-105' 
              : 'bg-gray-800 text-white hover:bg-gray-900 hover:scale-105'}
            transition-all duration-300
            shadow-md hover:shadow-lg
            group-hover:translate-x-1
          `}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"></path>
          </svg>
          <span className="text-sm font-medium">Order now</span>
        </button>
        
        {/* Product Image - Positioned to the right */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
          <img 
            src={image_url} 
            alt={title} 
            className="w-36 h-36 object-contain drop-shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}