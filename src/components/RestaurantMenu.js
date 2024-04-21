import React ,{useState} from 'react'
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

// useEffect(()=>{
//     fetchMenu();
// },[]);

const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);
const [showItems, setShowItems] =useState(0);

  const handleClick =(index,event)=>{
    setShowItems(index);
    console.log(index)
  }

if(resInfo === null ) return <div></div>;

const {name , avgRating, costForTwo , cloudanaryImage, cuisines} = resInfo?.cards[2]?.card?.card?.info;
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( c =>
      c.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (<div className='text-center'>
    <h1 className='font-bold my-10 text-lg'>{name}</h1>
    <h3 className='font-bold text-lg'>{avgRating} </h3>
    <h3 className='font-bold text-lg'>{cuisines.join(',')} - {costForTwo}</h3>
    {/* <ul>
    {itemCards && itemCards.map((item) =>
        <li key ={item?.card?.info?.id}> {item?.card?.info?.name}</li>
    )}
    </ul> */}
    {categories.map( (cat , index)=> 
      //controlled compoennet
      <div key={index} onClick={(e)=> handleClick(index, e)}>
      <RestaurantCategory data={cat?.card?.card} open={index === showItems} /></div>
    )}
    </div>
  )
}

export default RestaurantMenu