import headerImage from '../../assets/pics/Group 15.png'

export default function HeaderSection(){
  return ( 
    <section className='lg:mt-0 mt-[1.5rem] md:flex-row flex justify-start flex-col relative'>
      <div className='md:w-[50%] w-[100%] self-center'>
        <h2 className='lg:text-[3rem] lg:w-[86%] md:text-[2.3rem] md:w-[89%] text-[2.4rem] break-words md:text-start font-bold text-red1 text-center'>
          Order your 
          favourite food
        </h2> 
        <p className="lg:max-w-[55%] md:max-w-[90%] md:text-start text-center text-gray2 mt-[0.5rem]">
           Hamburger has many flavors, have you tried Cheese Beef Hamburger?
        </p>
        <button type="button" className='md:ml-0  p-[1rem] bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-red-600 mt-[1rem] rounded-full cursor-pointer shadow-lg hover:scale-[1.05] transition-all duration-300 text-white font-semibold text-xl w-full max-w-fit ml-auto mr-auto flex items-center justify-center'>
          <span className='mr-2 md:text-2xl text-[1.2rem]'>🍔</span> {/* Enhanced icon size for better visibility */}
          <span className='md:text-lg text-[1rem]'>Get VIP Hamburger!</span>
        </button>
      </div>
      <div className='md:mt-0 mt-[1rem] md:m-0 flex justify-center items-center'>
        <img src={headerImage} className='md:max-w-[85%] sm:max-w-[65%] max-w-[90%]' alt="" />
      </div>
    </section>
  );
}