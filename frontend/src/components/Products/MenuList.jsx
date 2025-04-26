import { fetchMenuList } from "../../fetch/http";
import Ul from '../UI/Ul.jsx'
import MenuListChild from './MenuListChild.jsx'
import { useEffect, useState } from "react";


export default function MenuList(){
  const [ isFetching, setIsFetching ] = useState(null);
  const [ error, setError ] = useState(false);

  const [ menuList, setMenuList ] = useState([])
  const [ selectedMenu, setSelectedMenu ] = useState(null);

  useEffect(()=>{
    setIsFetching(true) 
    async function getMenuList() {
      try {
        const menu_content = await fetchMenuList()
        setMenuList(menu_content)

        setIsFetching(false)
      } catch (error) {        
        setError('error from server! no menu list detected!')
      }
      
    }
    getMenuList()
    
    
    }, [])


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
      className="mt-[2rem] grid grid-flow-col justify-start gap-[1rem] overflow-auto"
      isFetching={isFetching}
      error={error}
      component={MenuListChild}
      componentProps={{
        selectedMenu: selectedMenu,
        onMenuClick: handleSelectMenu
      }}
    >
    {
      menuList
    } 
    </Ul>
  );
  }