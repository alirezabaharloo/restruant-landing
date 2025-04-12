import { useState } from 'react';
import Li from './Li.jsx';
import Img from './Img.jsx';
import Ul from './Ul.jsx';
import burgerImage from '../../assets/pics/Burger.png';
import closeImage from '../../assets/pics/icons8-close-50.png';
import { HEADER_INFO } from '../../utils.js';
import basketImage from '../../assets/pics/basket1.svg';
import Basket from './basket.jsx';

export default function Nav() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const baseUlClasses = "bg-transparent z-20 transition-all duration-200 ease-in-out lg:items-center lg:gap-[3rem] lg:flex-row lg:flex lg:static lg:text-[1rem] lg:w-fit gap-[1.5rem] text-[1.1rem] justify-start items-center fixed right-[-15rem] top-0 w-[12.5rem] px-[2rem] py-[1.25rem] h-fit flex flex-col rounded-[1rem] h-screen lg:h-[initial]";
  
  const baseMatClasses = 'z-[19] transition-opacity duration-300 fixed bg-black invisible opacity-0 w-full inset-0';
  
  const baseBlackScreenClasses = 'transition-all duration-300 fixed inset-0 bg-black z-[10] backdrop-blur-lg invisible opacity-0';
  

  const ulClasses = isBurgerOpen 
    ? "z-20 transition-all duration-200 lg:items-center lg:gap-[3rem] lg:flex-row lg:flex lg:static lg:text-[1rem] lg:w-fit gap-[1.5rem] text-[1.1rem] bg-white justify-start items-center fixed right-[0] top-0 w-[15rem] px-[2rem] py-[1.25rem] h-fit flex flex-col rounded-[1rem] h-screen"
    : baseUlClasses;

  const matClasses = isBurgerOpen
    ? 'z-[19] transition-opacity duration-300 fixed bg-black opacity-[40%] w-full block inset-0 left-0'
    : baseMatClasses;

  const blackScreenClasses = isBasketOpen
    ? 'transition-opacity duration-300 fixed inset-0 z-[20] backdrop-blur-sm bg-black/50'
    : baseBlackScreenClasses;


  const handleBasketClick = () => setIsBasketOpen(prev => !prev);
  const handleBurgerClick = () => setIsBurgerOpen(true);
  const handleCloseBurger = () => setIsBurgerOpen(false);

  return (
    <nav className="grid items-center lg:grid-cols-[70px_700px_200px] grid-cols-[repeat(3,auto)] justify-between">
      <Img />
      <Ul className={ulClasses}>
        {HEADER_INFO.map((name, index) => (
          <Li key={index}>{name}</Li>
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
      </Ul>
      <Ul className="flex items-center gap-[0.5rem] justify-center max-w-max">
        <li className='py-[0.3rem] rounded-[2rem] relative cursor-pointer z-[30]'>
          <div onClick={handleBasketClick}>
            <img src={basketImage} alt="Basket" className='w-[2.9rem]' />
            <span className='flex justify-center items-center absolute w-[1.3rem] h-[1.3rem] rounded-full bg-green-500 bottom-[2px] right-[2px]'>
              <p className='text-white font-semibold text-[0.8rem]'>2</p>
            </span>
          </div>
          <Basket isBasketOpen={isBasketOpen}></Basket>
        </li>
        <li className="lg:flex hidden w-[80px] py-[0.3rem] rounded-[2rem] bg-white1 text-red1 border-red1 border-[1px] items-center justify-center">
          <a href="#" className='font-medium'>Sign in</a>
        </li>
        <li className="lg:flex hidden w-[80px] py-[0.3rem] rounded-[2rem] bg-red1 text-white items-center justify-center">
          <a href="#" className='font-medium'>Log in</a>
        </li>
      </Ul>
      <div className='flex justify-end' onClick={handleBurgerClick}>
        <img src={burgerImage} alt="burgerImage" className="lg:hidden" />
      </div>
      <div className={matClasses}></div>
      <section className={blackScreenClasses}></section>
    </nav>
  );
}