import { useContext } from "react";
import { CartProgressContext } from "../../context/CartProgressContext";

export default function Modal({ children, open }) {
  const { showBasket } = useContext(CartProgressContext);
  const baseBasketClasses = 'sm:w-[25rem] w-[21rem] lg:left-[-20rem] sm:left-[-11.7rem] left-[-9.7rem] transition-all duration-300 top-[5rem] h-max absolute rounded-[0.5rem] invisible opacity-0';


  const basketClasses = open
    ? 'sm:w-[25rem] w-[21rem] lg:left-[-20rem] sm:left-[-11.7rem] left-[-9.7rem]  p-[1.3rem] cursor-auto transition-all duration-300 top-[5rem]  absolute h-max rounded-[0.7rem] bg-white shadow-lg'
    : baseBasketClasses;


  return (
    <>
      <section className={basketClasses}>
        <div className='relative w-full h-full'>
          {children}
        </div>
      </section>
    </>
)}