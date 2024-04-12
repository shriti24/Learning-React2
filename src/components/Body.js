import React, {useState, useEffect}from 'react';
import RestaurantCard from './RestaurantCard';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body =()=>{
    const [restaurant_List , setSearchList] = useState([]);
    const [filteredList, setFilteredList]= useState([]);
    const[searchText, setSearchText] = useState('');

    const fetchData =async ()=>{ //https://corsproxy.io/
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        setSearchList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants)
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
    return (
        <div className='body'>
            <div className='search'>
                <div className='search'> 
                    <input type='text' className='input-box' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                     <button onClick={()=>{
                            const filterList= restaurant_List.filter( res =>  res.info.name.includes(searchText));
                                    console.log(filterList);
                            setFilteredList(filterList);
                           
                        }
                    }>Search</button>
                 </div>
                {/* <Search  value={searchText}/> */}
                </div>
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{
                  const filteredList= restaurant_List.filter( res => 
                    res.info.avgRating > 4 );
                  setSearchList(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {filteredList.length ?
                    filteredList.map((res)=>
                    <Link to={'/restaurant/'+ res.info.id}><RestaurantCard resData={res.info} key={res.info.id}/></Link>) :
                    restaurant_List.map((res)=>
                    <Link to={'/restaurant/'+ res.info.id}><RestaurantCard resData={res.info} key={res.info.id}/></Link> )
                }
            </div>
        </div>
    )
   }

   export default Body;