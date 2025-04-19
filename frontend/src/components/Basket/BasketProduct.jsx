import { useContext } from 'react';
import trashImage from '../../assets/pics/trash.svg';
import { BasketContext } from '../../context/BasketContext';


export default function BasketProduct({ id, title, price, image_url, itemCount }){
  const { removeFromBasket ,onDecreaseQuantity ,onIncreaseQuantity  } = useContext(BasketContext);

  return (
    <>
    <div key={id} className='p-4 flex justify-between items-center gap-4 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-100'>
        
        {/* product content */}
        <div className='flex gap-4 items-center max-w-[14rem]'>
          <img src={image_url} alt={title} className='w-[5rem] h-[5rem] object-contain rounded-md' />
          <div>
            <p className='font-medium text-gray-800'>{title}</p>
            <div className='flex items-center gap-2 mt-1'>
              <p className='text-sm text-gray-600'>${price}</p>
            </div>
          </div>
        </div>

        {/* Remove button */}
        <div className='flex flex-col items-center justify-center'>
          <button
            onClick={() => removeFromBasket(id)}
            className='p-2 hover:bg-red-50 rounded-full transition-colors'
          >
            <img src={trashImage} alt="Remove" className='w-6 h-6' />
          </button>
          <div className='flex items-center gap-1 bg-gray-100 rounded-full px-2 py-[0.15rem]'>
            <button
              className='w-6 h-6 flex items-center justify-center text-gray-600 hover:text-red1 text-base font-semibold'
              onClick={() => onDecreaseQuantity(id)}
            >−</button>
            <span className='text-sm font-medium text-gray-700 w-5 text-center'>{itemCount}</span>
            <button
              className='w-6 h-6 flex items-center justify-center text-gray-600 hover:text-green-600 text-base font-semibold'
              onClick={() => onIncreaseQuantity(id)}
            >+</button>
          </div>
        </div>
      </div>
    </>
  );
}