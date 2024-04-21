import {useState, useContext} from 'react';
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header =() => {
    const [login , setLogin]= useState('Login');

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
   //subscribing to entire stor is in efficient , Any changes in store might trigger the state
    //fr eg - const store = useselector((store) => store ); store.cart.items
 //subscribing to the slice in store using selector. 
    const cart = useSelector((store)=> store.cart.items);
    return(
        <div className='flex  bg-yellow-500  sm:bg-yellow-200'>
            <div className='logo-container'>
                <img className='w-56'  src={LOGO_URL} />
            </div>
            <div className='nav-items ' >  
                    <ul className='flex justify-between p-4' >
                        <li className='px-4'>Online Status:{onlineStatus ? '✅' : '🛑'}</li>
                        <li className='px-4'>Home</li>
                        <li className='px-4'><Link to='/about'>About Us</Link></li>{/** anchor tag ll refresh entire page. */}
                        <li className='px-4'><Link to="/contact">ContactUs</Link></li> {/** Link tag ll not refresh entire page rather changing components. */}
                        <li className='px-4 font-bold text-xl'><Link to="/cart"> Cart ({cart.length} items) </Link></li>
                        <li className='px-4'><Link to="/instamart">Instamart</Link></li>
                        <li>
                    <button onClick={()=>{login=== 'Login'? setLogin('Logout'): setLogin('Login')}}>{login}</button>
                        </li>
                        <li className='px-4 font-bold'>{loggedInUser}</li>
                    </ul>
            </div>
        </div>
    )
   };

   export default Header;