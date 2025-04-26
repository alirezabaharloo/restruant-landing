import starImage from '../../assets/pics/Star 1.png'
import addToBasketImage from '../../assets/pics/Shopping Basket (1).png'
import { useContext, useState } from 'react'
import { BasketContext } from '../../context/BasketContext.jsx'

export default function MenuProductChild({ title, id, description, price, image_url, quantity, has_discount, price_with_discount }){
  const { addToBasket } = useContext(BasketContext)
  const [itemCount, setItemCount] = useState(1);

  const handleAddToBasket = () => {
    addToBasket({ 
      id, 
      title, 
      quantity: itemCount
    })
  }

  const decreaseCount = () => {
    setItemCount(prev => prev > 1 ? prev - 1 : 1);
  }

  const increaseCount = () => {
    setItemCount(prev => prev < quantity ? prev + 1 : prev);
  }

  return (
    <li className='
      p-4 group 
      border border-gray-200 rounded-xl 
      hover:shadow-lg hover:border-red-100 
      transition-all duration-300
      hover:-translate-y-1
      bg-gradient-to-br from-white via-red-50 to-white
    '>
      <div className='relative group'>
        <div className='relative overflow-hidden rounded-lg'>
          <img 
            src={image_url} 
            alt={title}
            className='
              w-full h-48 object-contain 
              group-hover:scale-110 
              transition-transform duration-500
            ' 
          />
          {has_discount && (
            <div className='
              absolute top-3 right-3 
              bg-gradient-to-r from-red-600 to-red-700 
              text-white px-3 py-1 rounded-full 
              font-semibold text-sm
              transform hover:scale-110 
              transition-all duration-200
              shadow-lg
            '>
              {Math.round(100 - ((price_with_discount * 100) / price))}% OFF
            </div>
          )}
        </div>
        <div className='
          absolute bottom-0 left-0 right-0 
          h-24 bg-gradient-to-t from-white to-transparent
        '></div>
      </div>

      <div className='mt-4 space-y-2'>
        <h6 className='font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors'>{title}</h6>   
        <p className='text-gray-600 text-sm line-clamp-2'>{description}</p>
        <div className='flex items-center gap-1'>
          {[...Array(5)].map((_, i) => (
            <img key={i} src={starImage} className='w-5 h-5' alt="star" />
          ))}
          <span className='text-gray-500 text-sm'>(5)</span>
        </div>
      </div>

      <div className='mt-6 flex justify-between items-center'>
        <div className='flex flex-col'>
          {has_discount ? (
            <>
              <span className='text-red-600 text-xl font-bold'>{price_with_discount}$</span>
              <span className='text-gray-400 text-sm line-through'>{price}$</span>
            </>
          ) : (
            <span className='text-gray-800 text-xl font-bold'>{price}$</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="
            flex items-center h-10 
            border-2 border-gray-200 rounded-lg 
            hover:border-red-400 
            transition-all duration-300
            overflow-hidden
          ">
            <button 
              className="
                px-3 h-full 
                text-gray-600 hover:text-red-600 
                hover:bg-gray-50
                transition-colors
              "
              onClick={decreaseCount}
            >
              -
            </button>
            <span className="w-8 text-center font-medium">
              {itemCount}
            </span>
            <button
              className="
                px-3 h-full 
                text-gray-600 hover:text-red-600 
                hover:bg-gray-50
                transition-colors
              "
              onClick={increaseCount}
            >
              +
            </button>
          </div>

          <button 
            className='
              p-2.5 bg-gradient-to-r from-red-600 to-red-700 rounded-lg 
              hover:from-red-700 hover:to-red-800 hover:scale-110 
              transition-all duration-300
              shadow-md hover:shadow-lg
            ' 
            onClick={handleAddToBasket}
          >
            <img src={addToBasketImage} className='w-5 h-5' alt="Add to basket" />
          </button>
        </div>
      </div>
    </li>
  );
}