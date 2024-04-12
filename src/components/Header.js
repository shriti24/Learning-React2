import {useState} from 'react';
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header =() => {
    const [login , setLogin]= useState('Login');

    const onlineStatus = useOnlineStatus();

    return(
        <div className='flex'>
            <div className='logo-container'>
                <img className='w-56'  src={LOGO_URL} />
            </div>
            <div className='nav-items'>  
                    <ul>
                        <li>Online Status:{onlineStatus ? '✅' : '🛑'}</li>
                        <li>Home</li>
                        <li><Link to='/about'>About Us</Link></li>{/** anchor tag ll refresh entire page. */}
                        <li><Link to="/contact">ContactUs</Link></li> {/** Link tag ll not refresh entire page rather changing components. */}
                        <li>Cart</li>
                        <li><Link to="/instamart">Instamart</Link></li>
                        <li>
                    <button onClick={()=>{login=== 'Login'?setLogin('Logout'):setLogin('Login')}}>{login}</button>
                        </li>
                    </ul>
            </div>
        </div>
    )
   };

   export default Header;