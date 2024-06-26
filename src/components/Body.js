import React, {useState, useEffect, useContext}from 'react';
import {RestaurantCard, withPromotedRestaurantCard} from './RestaurantCard';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body =()=>{
    const [restaurant_List , setSearchList] = useState([]);
    const[searchText, setSearchText] = useState('');

    const PromotedRestaurantCard = withPromotedRestaurantCard(RestaurantCard);
    
    const fetchData =async ()=>{ //https://corsproxy.io/
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setSearchList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    }

    //if useffect is called without the dependency array it will visit every time component loads
    // But if thebdependency arrray is empty [] then it will be called only on first compoenent load.
    useEffect(()=>{
        fetchData();
    },[])

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return <h1> Looks Like you're offline , Please check your internet connection! </h1>
     if(restaurant_List?.length === 0){
        return <h2>Loading...</h2>
    }
    const {loggedInUser, setUserInfo} = useContext(UserContext);
       return (
        <div className='body'>
            <div className='flex'>
            <div className='search m-4 p-4'>
                <div className='search'> 
                    <input type='text' data-testid ="searchIp" className='input-box border border-solid border-black' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                     <button onClick={()=>{
                            const filterList= restaurant_List.filter( res =>  res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setSearchList(filterList);
                        }
                    } className=" m-4 px-4 my-2 border-solid bg-green-500 rounded-lg" 
                    >Search</button>
                 </div>
                {/* <Search  value={searchText}/> */}
                </div>
            <div className=' m-4 p-4'>
                <button className='px-4 py-2 bg-green-100 rounded-lg' onClick={()=>{
                  const filteredList= restaurant_List.filter( res => 
                    res.info.avgRating > 4 );
                  setSearchList(filteredList);
                }}>Top Rated Restaurant</button>
                <span className='m-4'> User Name : <input className='border border-black ' value={loggedInUser} onChange={(e)=>setUserInfo({name: e.target.value})}/></span>
                </div>
            </div>
            <div className='res-container flex flex-wrap overflow-auto'>
                {
                    restaurant_List.map((res)=>
                    res.info.aggregatedDiscountInfoV3 ? 
                    <Link to={'/restaurant/'+ res.info.id}><PromotedRestaurantCard resData={res.info} key={res.info.id} 
                        header={res.info.aggregatedDiscountInfoV3.header + res.info.aggregatedDiscountInfoV3.subHeader}/></Link> :
                    <Link to={'/restaurant/'+ res.info.id}><RestaurantCard  resData={res.info} key={res.info.id}/></Link> )
                }
            </div>
        </div>
    )
   }

   export default Body;