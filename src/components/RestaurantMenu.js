import React from 'react'
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

// useEffect(()=>{
//     fetchMenu();
// },[]);

const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
console.log(resInfo)

if(resInfo === null ) return <div></div>;

const {name , avgRating, costForTwo , cloudanaryImage, cuisines} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;//[0]?.card?.info;

  return (<div>
    <h1>{name}</h1>
    <h3>{avgRating}</h3>
    <h3>{costForTwo}</h3>
    <h3>{cuisines.join(',')}</h3>
    <ul>
    {itemCards && itemCards.map((item) =>
        <li key ={item?.card?.info?.id}> {item?.card?.info?.name}</li>
    )}
    </ul>
    </div>
  )
}

export default RestaurantMenu