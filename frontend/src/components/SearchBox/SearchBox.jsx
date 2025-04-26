import foodImage1 from '../../assets/pics/20220905-113313 1.png'
import foodImage2 from '../../assets/pics/burger_with_fried_chicken_2021_08_29_03_54_46_utc 1.png'


export default function SearchBox(){
  return (
    <section className="relative overflow-hidden max-w-[1180px] mx-auto md:mt-[5rem] mt-[72rem] bg-gradient-to-br from-gray1 to-gray-800 h-[25rem] rounded-[1.5rem] flex justify-center items-center flex-col lg:gap-[2.5rem] gap-[3rem] shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="z-[2] flex justify-center items-center flex-col text-center max-w-full w-full px-[1.5rem]">
        <h4 className="lg:text-[3rem] md:text-[2rem] text-[1.5rem] text-[#FFFDE6] font-medium hover:text-yellow1 transition-colors duration-300">FIND A FOODELI STORE NEAR YOU</h4>
        <p className="text-[#f1f1f1] font-light md:text-[1rem] text-[0.9rem] hover:text-yellow1 transition-colors duration-300">see the convenience store address with you most</p>
      </div>
      <div className="z-[2] lg:max-w-[50%] md:max-w-[60%] max-w-[80%] w-full bg-gradient-to-r from-yellow1 to-yellow-400 h-[3.5rem] rounded-r-full rounded-l-full flex justify-center items-center pl-[1.5rem] gap-[0.5rem] shadow-md hover:shadow-lg transition-all duration-300">
        <input 
          type="text" 
          placeholder="Typing location" 
          className="md:w-[70%] w-[60%] text-[1.15rem] border-none outline-none bg-transparent placeholder-gray-700 focus:placeholder-transparent transition-all duration-300" 
        />
        <div className="md:w-[30%] w-[40%] bg-gradient-to-r from-[#FFEAE6] to-red-200 text-gray1 rounded-r-full rounded-l-full h-[80%] flex justify-center items-center cursor-pointer mr-[0.5rem] mb-auto mt-auto hover:from-red-200 hover:to-[#FFEAE6] transition-all duration-300 shadow-sm hover:shadow-md" >
          <p className="text-gray1 font-medium sm:text-[1rem] text-[0.8rem] hover:text-red1 transition-colors duration-300">See on map</p>
        </div>  
      </div>
      <img 
        src={foodImage1} 
        className='absolute md:opacity-40 opacity-20 z-[1] lg:scale-[0.9] md:scale-[0.8] scale-[0.75] lg:left-[-6%] md:left-[-10%] left-[-15%] top-[10%] hover:opacity-60 transition-opacity duration-300' 
        alt="" 
      />
      <img 
        src={foodImage2} 
        className='absolute md:opacity-40 opacity-20 z-[1] lg:scale-[0.9] md:scale-[0.8] scale-[0.75] lg:bottom-[-15%] bottom-[-20%] left-[10%] hover:opacity-60 transition-opacity duration-300' 
        alt="" 
      />
    </section>
  );
}