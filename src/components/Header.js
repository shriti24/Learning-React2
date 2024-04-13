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
                    <ul className='flex justify-between p-4'>
                        <li className='px-4'>Online Status:{onlineStatus ? '✅' : '🛑'}</li>
                        <li className='px-4'>Home</li>
                        <li className='px-4'><Link to='/about'>About Us</Link></li>{/** anchor tag ll refresh entire page. */}
                        <li className='px-4'><Link to="/contact">ContactUs</Link></li> {/** Link tag ll not refresh entire page rather changing components. */}
                        <li className='px-4'>Cart</li>
                        <li className='px-4'><Link to="/instamart">Instamart</Link></li>
                        <li>
                    <button onClick={()=>{login=== 'Login'?setLogin('Logout'):setLogin('Login')}}>{login}</button>
                        </li>
                    </ul>
            </div>
        </div>
    )
   };

   export default Header;