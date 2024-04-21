import React from 'react';
import {RECIPE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addItem} from '../reducers/cartSlice';

const ItemList = ({items}) => {

  const dispatch = useDispatch();

  const AddToCart = (item) =>{
    //dispatch action
    dispatch(addItem(item)); // create object and {payload: item}

  }
  return (
    <>
      {items.map(item => <div key={item.card.info.id}
                      className='m-2 p-2  border-gray-400 border-b-2 text-left'>
        <div className='flex justify-between'>
        <img className='w-14' src={RECIPE_URL + item.card.info.imageId }/>
        <span className='mx-12'>
          <button className='border border-red-500 bg-red-500 text-right' onClick={()=> AddToCart(item)}>Add</button></span> </div>
          <div>
          <span>{item.card.info.name} </span>
          <span>- {item.card.info.price /100} </span>
           </div>
          <span className='text-xs'>{item.card.info.description}</span> 
      </div>
      )}
    </>
  )
}

export default ItemList