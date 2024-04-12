import React from 'react'
import {MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
const [resInfo, setResInfo] = React.useState(null);

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API +`${resId}`+`&catalog_qa=undefined&SUBMIT=ENTER`);
        const jsonData = await data.json();
        setResInfo(jsonData?.data);
    };

    React.useEffect(()=>{
        fetchMenu();
    },[])
  return resInfo;
}

export default useRestaurantMenu