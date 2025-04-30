import Ul from '../UI/Ul.jsx'
import MenuListChild from './MenuListChild.jsx'
import { useEffect, useState } from "react";


export default function MenuList(){
  const [ selectedMenu, setSelectedMenu ] = useState(null);


  const handleSelectMenu = (id) => {
    setSelectedMenu(prevSelectMenu=>{
      if (prevSelectMenu == id) {
        return null
      }
      return id
    })
  }


  return (
    <Ul 
      url="http://localhost:8000/product-categories/"
      className="mt-[2rem] grid grid-flow-col justify-start gap-[1rem] overflow-auto"
      component={MenuListChild}
      componentProps={{
        selectedMenu: selectedMenu,
        onMenuClick: handleSelectMenu
      }}
    >
    </Ul>
  );
}