import {RECIPE_URL} from '../utils/constants';
 
 const RestaurantCard =(props)=>{
    const {resData} = props;
    const {name,avgRating, cloudinaryImageId, id} = resData;
    return (
        <div className='res-card'> 
            <img className='res-logo' alt='res-logo' 
                src={RECIPE_URL+cloudinaryImageId}/> 
            <h3>{name}</h3> <h3>{id}</h3>
            <h3>{avgRating}</h3>

        </div>
    )
   }
   export default RestaurantCard