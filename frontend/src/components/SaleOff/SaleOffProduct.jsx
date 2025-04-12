import addToBasketImage  from '../../assets/pics/Shopping Basket.svg'



export default function SaleOffProduct({ title, description, image, price, index }){
  let imageClasses = 'w-[15rem] max-w-[15rem] relative  top-[20%] md:right-[56%] right-0'
  let divClasses = "flex md:w-[95%] w-[55%]"

  if (index === 1) {
    imageClasses = 'w-[15rem] max-w-[15rem] relative top-[20%] sm:right-[20%]'
    divClasses = "flex md:w-[95%]"
  }

  return (
    <div className="group h-[350px] transition-all duration-300  ease-in-out hover:bg-red1 hover:scale-y-[1.1] hover:scale-x-[1.05] overflow-hidden border-[1px] py-[2.5rem] pl-[2rem] border-[#E3E3E3] bg-white1 rounded-[1.25rem]">
      <div className="grid grid-cols-[5.4rem_1fr] justify-center items-center">
        <p className="group-hover:text-white1 text-gray1 w-full">Fast food</p>
        <span className="w-full h-[0.1rem] bg-[rgb(125,124,124,0.25)] inline-block"></span>
      </div>
      <div className={divClasses}>
        <div className='z-[2] w-[95%]'>
          <h5 className="group-hover:text-yellow1 text-nowrap text-red1 font-semibold uppercase text-[1.7rem] my-[0.5rem]">{title}</h5>
          <p className="group-hover:text-white2 text-gray2 max-w-[80%]">{description}</p>
          <div className="mt-[0.5rem] flex justify-start items-center gap-[0.6rem]">
            <p className="group-hover:text-white1 font-semibold text-gray3 line-through">{price}$</p>
            <p className="group-hover:text-yellow1 text-[1.5rem] font-semibold text-red1">{price}$</p>
          </div>
          <button className="mt-[3rem] group-hover:bg-[#FFFDE6] flex justify-center items-center gap-[0.5rem] bg-gray2 py-[0.5rem] px-[0.7rem] rounded-[20px] cursor-pointer">
            <img src={addToBasketImage} className="w-[24px] block" alt="" />
            <p className="group-hover:text-gray1 text-white1">Order now</p>
          </button>
        </div>
        <div className="z-[1]">
          <img src={image} className={imageClasses}   alt="" />
        </div>
      </div>
    </div>
  )
}