import foodImage1 from '../../assets/pics/20220905-113313 1.png'
import foodImage2 from '../../assets/pics/burger_with_fried_chicken_2021_08_29_03_54_46_utc 1.png'


export default function SearchBox(){
  return (
    <section className="relative overflow-hidden max-w-[1180px] mx-auto md:mt-[5rem] mt-[72rem] bg-gray1 h-[25rem] rounded-[1.5rem] flex justify-center items-center flex-col lg:gap-[2.5rem] gap-[3rem]">
      <div className="z-[2] flex justify-center items-center flex-col text-center max-w-full w-full px-[1.5rem]">
        <h4 className="lg:text-[3rem] md:text-[2rem] text-[1.5rem] text-[#FFFDE6] font-medium">FIND A FOODELI STORE NEAR YOU</h4>
        <p className="text-[#f1f1f1] font-light md:text-[1rem] text-[0.9rem] ">see the convenience store address with you most</p>
      </div>
      <div className="z-[2] lg:max-w-[50%] md:max-w-[60%] max-w-[80%] w-full  bg-yellow1 h-[3.5rem] rounded-r-full rounded-l-full flex justify-center items-center pl-[1.5rem] gap-[0.5rem]">
        <input type="text" placeholder="Typing location" className="md:w-[70%] w-[60%] text-[1.15rem] border-none outline-none" />
        <div className="md:w-[30%] w-[40%] bg-[#FFEAE6] text-gray1 rounded-r-full rounded-l-full h-[80%] flex justify-center items-center cursor-pointer mr-[0.5rem] mb-auto mt-auto" >
        <p className="text-gray1 font-medium sm:text-[1rem] text-[0.8rem]">See on map</p>
        </div>  
     </div>
    <img src={foodImage1} className='absolute md:opacity-40 opacity-20 z-[1] lg:scale-[0.9] md:scale-[0.8] scale-[0.75] lg:left-[-6%] md:left-[-10%] left-[-15%]  top-[10%]' alt="" />
    <img src={foodImage2} className='absolute md:opacity-40 opacity-20 z-[1] lg:scale-[0.9] md:scale-[0.8] scale-[0.75] lg:bottom-[-15%] bottom-[-20%]  left-[10%]' alt="" />
    </section>
  );
}