import trashImage from '../../assets/pics/trash.svg';
import testImage from '../../assets/pics/ice_tea_2021_11_30_16_48_46_utc 1.png';


export default function Basket({ isBasketOpen }){

  const baseBasketClasses = 'transition-all duration-300 absolute bg-white lg:left-[initial] lg:right-0 left-[-300%] bottom-[-4rem] w-[20rem] rounded-[0.5rem] h-[10rem] bg-red1 invisible opacity-0';
  
  const basketClasses = isBasketOpen
    ? 'p-[1.3rem] cursor-auto transition-all duration-300 absolute left-[-300%] lg:left-[initial] lg:right-0 bottom-[-14rem] w-[20rem] rounded-[0.7rem] bg-gradient-to-r from-yellow-400 to-yellow-600'
    : baseBasketClasses;

  return (
  <section className={basketClasses}>
      <div className='relative w-full h-full'>
      <div className='w-[20rem] p-[1.3rem] text-black absolute left-[-1.3rem] right-0 h-[2.2rem] bg-yellow-700 rounded-t-[0.5rem] flex items-center justify-between top-[-2.2rem]'>
        <p className='font-semibold'>2 items</p>
        <p className='font-semibold'>Your Basket</p>
      </div>
      <div className='p-[1.3rem] mt-[0.8rem] flex justify-between items-center gap-[1rem]'>
        <div className='flex justify-center gap-[1rem] items-center'>
          <img src={testImage} alt="Product" className='w-[3rem]' />
          <div>
            <p className='font-medium'>Product Title</p>
            <p className='text-[0.9rem] text-gray-700'>$3000</p>
          </div>
        </div>
        <img src={trashImage} alt="Remove" className='w-[1.5rem] cursor-pointer' />
      </div>
      <span className='absolute w-full ml-auto mr-auto left-0 right-0 h-[0.15rem] rounded-full bg-red1 mb-[2rem]'></span>
      <div className='p-2 flex justify-between items-center'>
        <p className='font-semibold'>Total Price: <span className='text-red1'>$3000</span></p>
        <button className='py-[0.5rem] px-[1rem] rounded-[0.5rem] bg-red1 text-white cursor-pointer'>buy</button>
      </div>
    </div>
  </section> 
  )
}