import { useContext } from "react";
import { CartProgressContext } from "../../context/CartProgressContext";

export default function Modal({ children, open }) {
  const { hideModal } = useContext(CartProgressContext);

  const baseBasketClasses = 'sm:w-[25rem] w-[21rem] lg:left-[-21.5rem] sm:left-[-11.7rem] left-[-9.7rem] transition-all duration-300 top-[2rem] h-max absolute rounded-[0.5rem] invisible opacity-0';

  const baseBlurClasses = 'transition-all duration-300 fixed inset-0 bg-black z-[-1] backdrop-blur-lg invisible opacity-0';


  const blurClasses = open
    ? 'transition-opacity duration-300 fixed inset-0 z-[-1] backdrop-blur-sm bg-black/50'
    : baseBlurClasses;

  const basketClasses = open
    ? 'sm:w-[25rem] w-[21rem] lg:left-[-21.5rem] sm:left-[-11.7rem] left-[-9.7rem]  p-[1.3rem] cursor-auto transition-all duration-300 top-[2rem]  absolute h-max rounded-[0.7rem] bg-white shadow-lg'
    : baseBasketClasses;


  return (
    <section className="relative">
      <div className={basketClasses}>
        <div className='relative w-full h-full'>
          {children}
        </div>
      </div>
      <span className={blurClasses} onClick={hideModal}></span>
    </section>
)}