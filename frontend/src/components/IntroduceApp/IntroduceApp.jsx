import phoneImage from  '../../assets/pics/Group 23.png'
import googlePlayButton from '../../assets/pics/ammount (1).png'
import appStoreButton from '../../assets/pics/ammount.png'


export default function IntroduceApp(){
  return (
    <section className="lg:h-[400px] md:h-[835px] h-[935px] lg:flex-row flex-col 2xl:justify-end justify-start lg:items-end items-start lg:p-0 py-[4.2rem] md:rounded-r-full md:rounded-t-[0] rounded-t-[500px]  md:relative absolute md:left-[-1.5rem] left-0 xl:mr-[1rem] 2xl:max-w-[90%] max-w-full  mt-[8rem]  flex gap-[2rem] bg-white1 border-[1px] border-[#E3E3E3]"> 
      <div className='overflow-hidden lg:order-1 order-2 lg:bottom-[1.8rem] md:bottom-[1.87rem] bottom-[1.6rem] lg:relative absolute md:justify-start scale-[1.25] md:w-[initial] w-[89%] flex md:items-start justify-center items-center'> 
        <img src={phoneImage} className='md:max-w-[23rem] max-w-[20rem] 2xl:ml-0 md:ml-[1.5rem] md:left-0 md:right-0 ml-[1.5rem]' alt="" />
      </div>
      <div className='2xl:max-w-[55%] flex flex-col md:justify-start md:mt-0 mt-[3rem] justify-center items-center lg:max-w-[70%] max-w-[85%]  lg:self-center md:self-start md:text-start text-center lg:ml-0 md:ml-[1.5rem] md:mx-0 mx-auto lg:order-2 order-1'>
        <div className='max-w-[95%]'>
          <h6 className='font-medium text-[1.25rem] text-gray3'>Exclusive offers and more</h6>
          <h4 className='font-medium lg:text-[3rem] text-[2rem] text-red1'>MCDONALD’S MOBILE APP</h4>
          <p className='font-light'>As a global No. 1 fast food brand, McDonald's wishes to bring customers not only delicious and hygienic food of international standards but also the best service experience.</p>
          <div className='md:mt-[2rem] mt-[4rem] flex items-center md:justify-start justify-center gap-[1rem]'>
            <a href="curosr-pointer">
              <img src={googlePlayButton} alt="" />
            </a>
            <a href="curosr-pointer">
              <img src={appStoreButton} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}