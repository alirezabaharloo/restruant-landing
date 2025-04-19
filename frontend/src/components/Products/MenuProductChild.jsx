import starImage from '../../assets/pics/Star 1.png'
import addToBasketImage  from '../../assets/pics/Shopping Basket (1).png'
import { useContext, useRef, useState } from 'react'
import { BasketContext } from '../../context/BasketContext.jsx'

export default function MenuProductChild({ title, id, description, price, image_url, quantity }){
  const { addToBasket } = useContext(BasketContext)
  const [itemCount, setItemCount] = useState(1);

  const handleAddToBasket = () => {
    addToBasket({ id, title, price, image_url, itemCount, quantity })
  }

  const decreaseCount = () => {
    setItemCount(prev => prev > 1 ? prev - 1 : 1);
  }

  const increaseCount = () => {
    setItemCount(prev => prev < quantity ? prev + 1 : prev);
  }

  return (
    <li className='p-[0.8rem] group border-[1px] border-[#E3E3E3] rounded-[0.8rem]'>
      <div className='flex justify-center items-center relative'>
        <img src={image_url} alt="" srcset="" />
        <span className='absolute w-full h-[65%] bg-[#FFFDE6] z-[-1] bottom-[-0.5rem] rounded-[0.5rem]'></span>
      </div>
      <div className='mt-[1.5rem]'>
        <h6 className='font-semibold text-[1.2rem]'>{title}</h6>   
        <p className='text-gray2 text-[0.85rem] mt-[0.1rem]'>{description}</p>
        <div className='mt-[0.5rem] flex items-center gap-[0.15rem]'>
          <img src={starImage} className='w-[1.25rem]' alt="" />
          <img src={starImage} className='w-[1.25rem]' alt="" />
          <img src={starImage} className='w-[1.25rem]' alt="" />
          <img src={starImage} className='w-[1.25rem]' alt="" />
          <img src={starImage} className='w-[1.25rem]' alt="" />
          <span className='text-gray3 font-[0.9rem]'>(5)</span>
        </div>
      </div>
      <div className='flex justify-between items-center mt-[2rem]'>
        <span className='text-gray1 text-[1.3rem] font-bold'>{price}$</span>
        <div className="flex items-center gap-2">
        <div className="flex items-center h-[2.5rem] border-2 border-gray-200 rounded-[0.5rem] hover:border-red-400 transition-all duration-300">
          <button 
            className="px-2 text-gray-600 hover:text-red-600 text-lg font-bold"
            onClick={decreaseCount}
          >
            -
          </button>
          <span className="w-[2rem] text-center">
            {itemCount}
          </span>
          <button
            className="px-2 text-gray-600 hover:text-red-600 text-lg font-bold"
            onClick={increaseCount}
          >
            +
          </button>
        </div>
          <button className='p-[0.5rem] bg-red-600 rounded-[0.5rem] cursor-pointer hover:scale-[1.1] transition-all duration-300' onClick={handleAddToBasket}>
            <img src={addToBasketImage} className='w-[1.3rem]' alt="" />
          </button>
        </div>
      </div>
    </li>
  );
}