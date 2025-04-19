import addToBasketImage  from '../../assets/pics/Shopping Basket.svg'


export default function SaleOffProduct({ title, description, image, price, index }){
  let imageClasses = 'w-[15rem] max-w-[15rem] relative  top-[20%] md:right-[56%] right-0'
  let divClasses = "flex md:w-[95%] w-[55%]"

  if (index === 1) {
    imageClasses = 'w-[15rem] max-w-[15rem] relative top-[20%] sm:right-[20%]'
    divClasses = "flex md:w-[95%]"
  }

  return (
    <div className="group h-[350px] transition-all duration-400  ease-in-out hover:bg-red1 hover:scale-y-[1.1] hover:scale-x-[1.05] overflow-hidden border-[1px] py-[2.5rem] pl-[2rem] border-[#E3E3E3] bg-white1 rounded-[1.25rem]">
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
          <svg className='text-white1 group-hover:text-gray1 transition-all duration-400' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.9963 12C5.344 12 4.86633 12.6144 5.02717 13.2466L6.42488 18.7398C6.76319 20.0693 7.96032 21 9.33225 21H14.6652C16.0383 21 17.2362 20.0678 17.5734 18.7367L18.9644 13.2456C19.1245 12.6137 18.6469 12 17.9951 12H5.9963ZM9 16C9 15.4477 9.44771 15 10 15C10.5523 15 11 15.4477 11 16V17C11 17.5523 10.5523 18 10 18C9.44771 18 9 17.5523 9 17V16ZM13 16C13 15.4477 13.4477 15 14 15C14.5523 15 15 15.4477 15 16V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V16Z" fill="currentColor"/>
            <path d="M3 9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 4.70711C11.0976 4.31658 11.0976 3.68342 10.7071 3.29289C10.3166 2.90237 9.68342 2.90237 9.29289 3.29289L8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711C8.68342 6.09763 9.31658 6.09763 9.70711 5.70711L10.7071 4.70711ZM13.2929 4.70711C12.9024 4.31658 12.9024 3.68342 13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L13.2929 4.70711Z" fill="currentColor"/>
          </svg>

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