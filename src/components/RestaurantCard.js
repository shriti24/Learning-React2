import {RECIPE_URL} from '../utils/constants';
 
 export const RestaurantCard =(props) => {
    const {resData} = props;
    const {name,avgRating, cloudinaryImageId, id} = resData;
    return (
        <div className='res-card m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200'> 
            <img className='res-logo rounded-lg' alt='res-logo' 
                src={RECIPE_URL+cloudinaryImageId}/> 
            <h3 className='font-bold'>{name}</h3> <h3>{id}</h3>
            <h3>{avgRating}</h3>
        </div> 
    )
   };

export const withPromotedRestaurantCard =(RestaurantCard) => {
    return (props) => <div className='m-auto'>
        <label className='size-4'> {props.header} </label>
        <RestaurantCard {...props}/>
        </div>
    } 