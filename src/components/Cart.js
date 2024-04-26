import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearItems } from '../reducers/cartSlice';

const Cart = () => {
    const  cartItems =  useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearItems());
    }

  return (
    <div className=' text-center font-bold m-4 p-4 ' data-testid='food-item'>
    <h1 className='font-bold text-xl ' >Cart</h1>
        <h2><button onClick={handleClearCart}>Clear Cart</button></h2>
        <div className=' text-center w-[600px] m-auto'>
            <ItemList items ={cartItems} /> </div>
            {cartItems.length ===0 && <h3> Add items to the cart</h3>}
    </div>
  )
}

export default Cart