import { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext.jsx';
import BasketProduct from './BasketProduct.jsx'
import Modal from '../UI/Modal.jsx';
import { CartProgressContext } from '../../context/CartProgressContext.jsx';

export default function BasketModal({ isBasketOpen }) {
  const { basket } = useContext(BasketContext);
  const { showCheckOut } = useContext(CartProgressContext);

  const totalPrice = basket.reduce((accumuteValue, currentValue)=>{
    return (accumuteValue + (currentValue.price * currentValue.itemCount))
  }, 0)

  const totalProductCount = basket.reduce((totalProductCount, product) => {
    return (totalProductCount + product.itemCount)
  }, 0)


  return (
    <Modal open={isBasketOpen}>
      {/* Basket Header */}
      <div className='sm:w-[25rem] w-[21rem] p-[1.3rem] text-white absolute left-[-1.3rem] top-[-2.2rem] h-[2.2rem] bg-red1 rounded-t-[0.7rem] flex items-center justify-between'>
          <p className='font-semibold'>{totalProductCount} item{totalProductCount !== 1 ? 's' : ''}</p>
          <p className='font-semibold'>Your Basket</p>
        </div>

        {/* Basket Content */}
        <div className='max-h-[300px] overflow-y-auto pr-1 pt-2 scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-gray-100 hover:scrollbar-thumb-red-400'>
          {
            basket.map(product=>{
              return <BasketProduct key={product.id} {...product} />
            })
          }
        </div>

        {/* Total / Empty Message */}
        {totalPrice > 0 ? (
          <div className='pt-4 border-t border-gray-300'>
            <div className='px-4 flex justify-between items-center'>
              <p className='font-semibold text-gray-800'>
                Total: <span className='text-red1'>${totalPrice.toFixed(2)}</span>
              </p>
              <button className='py-2 px-5 rounded-md bg-red1 text-white hover:bg-red-600 transition-colors' onClick={showCheckOut}>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className='py-8 flex flex-col items-center justify-center text-center'>
            <div className='w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center'>
              <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
              </svg>
            </div>
            <p className='font-semibold text-gray-600'>Your basket is empty</p>
            <p className='text-sm text-gray-400 mt-1'>Add some delicious items to your basket</p>
          </div>
        )}
    </Modal>
  );
}
