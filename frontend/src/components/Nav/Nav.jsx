import { useContext, useState } from 'react';
import Li from './Li.jsx';
import burgerImage from '../../assets/pics/Burger.png';
import closeImage from '../../assets/pics/icons8-close-50.png';
import { HEADER_INFO } from '../../utils/data.js';
import basketImage from '../../assets/pics/basket1.svg';
import BasketModal from '../Basket/BasketModal.jsx';
import { BasketContext } from '../../context/BasketContext.jsx';
import restruntImage from '../../assets/pics/5cd0017f81f2c93398152929833720b4.png'
import { CartProgressContext } from '../../context/CartProgressContext.jsx';
import CheckOutModal from '../CheckOut/CheckOutModal.jsx'


export default function Nav() {
  const { basket } = useContext(BasketContext);
  const { showBasket, hideModal, progress } = useContext(CartProgressContext);
  

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const baseBlackScreenClasses = 'z-[19] transition-opacity duration-300 fixed bg-black invisible opacity-0 w-full inset-0';
  const baseUlClasses = "bg-transparent z-20 transition-all duration-200 ease-in-out lg:items-center lg:gap-[3rem] lg:flex-row lg:flex lg:static lg:text-[1rem] lg:w-fit gap-[1.5rem] text-[1.1rem] justify-start items-center fixed right-[-15rem] top-0 w-[12.5rem] px-[2rem] py-[1.25rem] flex flex-col rounded-[1rem] h-screen lg:h-[initial]";  

  const ulClasses = isBurgerOpen 
    ? "z-[40] transition-all duration-200 lg:items-center lg:gap-[3rem] lg:flex-row lg:flex lg:static lg:text-[1rem] lg:w-fit gap-[1.5rem] text-[1.1rem] bg-white justify-start items-center fixed right-[0] top-0 w-[15rem] px-[2rem] py-[1.25rem] h-fit flex flex-col rounded-[1rem] h-screen"
    : baseUlClasses;

  const blackScreenClasses = isBurgerOpen
    ? 'z-[19] transition-opacity duration-300 fixed bg-black opacity-[40%] w-full block inset-0 left-0'
    : baseBlackScreenClasses;

  const handleOpenBurger = () => setIsBurgerOpen(true);
  const handleCloseBurger = () => setIsBurgerOpen(false);

  return (
    <nav className="grid items-center lg:grid-cols-[70px_700px_200px] grid-cols-[repeat(3,auto)] justify-between">
      <div className='h-[54px] bg-red1 w-[56px] flex justify-center items-center rounded-b-[0.3rem]'>
        <img src={restruntImage} alt="" className='scale-[75%]' />
      </div>
      <ul className={ulClasses}>
        {HEADER_INFO.map((name, index) => (
          <Li key={name}>{name}</Li>
        ))}
        <i className='lg:invisible absolute left-0 top-0 cursor-pointer' onClick={handleCloseBurger}>
          <img src={closeImage} alt="close" className='w-[2rem] mt-[0.8rem] ml-[0.8rem]' />
        </i>
        <li className="lg:hidden first:text-red1 *:font-semibold *:text-white bg-red1 w-[15rem] py-[0.5rem] flex justify-center items-center absolute top-[17rem]">
          <a href="#">log in</a>
        </li>
        <li className="lg:hidden first:text-red1 *:font-semibold *:text-white bg-red1 w-[15rem] py-[0.5rem] flex justify-center items-center absolute top-[20rem]">
          <a href="#">sign up</a>
        </li>
      </ul>
      <ul className="flex items-center gap-[0.5rem] justify-center max-w-max">
        <li className='py-[0.3rem] rounded-[2rem] relative cursor-pointer z-[30]'>
          <div onClick={progress === "basket" ? hideModal : showBasket}>
            <img src={basketImage} alt="Basket" className='w-[2.9rem]' />
            <span className='flex justify-center items-center absolute w-[1.3rem] h-[1.3rem] rounded-full bg-green-500 bottom-[2px] right-[2px]'>
              <p className='text-white font-semibold text-[0.8rem]'>{basket.length}</p>
            </span>
          </div>

          {/* core modals */}
          <BasketModal isBasketOpen={progress === "basket"} />
          <CheckOutModal isCheckOutOpen={progress === "checkout"} />
        </li>
        <li className="lg:flex hidden w-[80px] py-[0.3rem] rounded-[2rem] bg-white1 text-red1 border-red1 border-[1px] items-center justify-center">
          <a href="#" className='font-medium'>Sign in</a>
        </li>
        <li className="lg:flex hidden w-[80px] py-[0.3rem] rounded-[2rem] bg-red1 text-white items-center justify-center">
          <a href="#" className='font-medium'>Log in</a>
        </li>
      </ul>
      <div className='flex justify-end' onClick={handleOpenBurger}>
        <img src={burgerImage} alt="burgerImage" className="lg:hidden" />
      </div>
      
      {/* black and blur screen */}
      <span className={blackScreenClasses} ></span>

    
    </nav>
  );
}