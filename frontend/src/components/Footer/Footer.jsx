import macDonaldImage from '../../assets/pics/5cd0017f81f2c93398152929833720b4.png'
import massengerImage from '../../assets/pics/Messenger.svg'
import faceBookImage from '../../assets/pics/Facebook.svg'
import twiterImage from '../../assets/pics/Twitter.png'
import { HEADER_INFO } from '../../utils/data'


export default function Footer(){
    return (
      <section className="lg:flex-row flex-col mt-[9rem] flex justify-center lg:gap-[10rem] gap-[5rem] items-center absolute max-w-full w-full left-0 bg-yellow-50 md:pt-[3rem] lg:pt-[3rem] pt-[6rem] pb-[3rem] pl-[1rem] pr-[1rem]">
        <div className='lg:order-1 order-3'>
          <div className='flex justify-center items-center flex-col gap-[1rem]'>
            <div className='flex justify-center items-center gap-[1rem]'>
              <span className='md:w-[3.5rem] w-[4rem] md:h-[3.5rem] h-[4rem] flex justify-center items-center bg-red1'>
                <img src={macDonaldImage} alt="" className='w-[90%] max-w-[90%]' />
              </span>
              <h5 className='text-[2rem] font-medium'>Mc Donald’s</h5>
            </div>
            <div className='flex justify-center items-center gap-[1rem]'>
              <img src={massengerImage} className='w-[24px] max-w-[24px]' alt="" />
              <img src={faceBookImage} className='w-[24px] max-w-[24px]' alt="" />
              <img src={twiterImage} className='w-[24px] max-w-[24px]' alt="" />
            </div>
          </div>
        </div>
        <div className='flex justify-center items-start sm:gap-[8rem] gap-[4rem] lg:order-2 order-1'>
          <div>
            <p className='mb-[2rem]'>USEFUL LINKS</p>
            <ul className='*:font-extralight flex justify-center items-start flex-col gap-[0.5rem]'>
              {
                HEADER_INFO.map((data, index)=>{
                  return (
                    <li key={index}>
                      <a href="#">{data}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div>
            <p className='mb-[2rem]'>OPENING HOUR</p>
            <ul className='*:font-extralight flex justify-center items-start flex-col gap-[0.5rem]'>
              
              <li>
                <a href="#">Monday - Friday:9:00 - 23:00h</a>
              </li>
              <li>
                  <a href="#">Saturday:09:00 - 16:00h</a>
              </li>
              <li>
                <a href="#">Sunday:12:00 - 18:00h</a>
              </li>
              
            </ul>
          </div>
        </div>
      </section>
    );
}