import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data ,open }) => {
 
  return (
    <>
    <div className='w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4'>
       <div className='flex justify-between cursor-pointer'> 
        <span className='font-bold text-sm'>{data.title}  ({data.itemCards.length})</span>
        <span>⬇️</span></div>
       {open &&  <ItemList items={data.itemCards}/>}
    </div>
    </>
  )
}

export default RestaurantCategory