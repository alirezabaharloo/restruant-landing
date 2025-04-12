
export default function MenuListChlid({ image_url, name, id, selectedMenu, onMenuClick }){
  let liClasses = 'flex items-center w-[10.5rem] justify-center items-center cursor-pointer gap-[0.5rem] py-[0.8rem] px-[1rem] bg-[#F1F1F1] border-[#E3E3E3] border-[1px] rounded-[100px]'
  let h5Classes = 'font-semibold text-gray2 font-[1rem]'


  if (selectedMenu === id) {
    liClasses = 'flex items-center w-[10.5rem] justify-center items-center cursor-pointer gap-[0.5rem] py-[0.8rem] px-[1rem] bg-[#FFC300] border-[#FFD429] border-[1px] rounded-[100px]'
    h5Classes = 'font-semibold text-gray1 font-[1rem]'
  }


  return (
    <li className={liClasses} onClick={()=>onMenuClick(id)}>
      <div className='flex justify-center items-center'>
        <img src={image_url} className="max-w-[24px]"  alt="" />
      </div>
      <h5 className={h5Classes}>{name}</h5>
    </li>
  );
}


