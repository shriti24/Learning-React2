import React from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

// const About =()=> <>
//     <h1>About</h1>
//     <h2>This is Namaste React webseries.</h2>

//     {/* <User/> */}
//     <UserClass name={"ruby from class"}/>
// </>


class About extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor");
    }
     componentDidMount(){
        console.log("componentDidMount parent");
    }

    render(){

        console.log("render");

        return(<>
                <h1>About</h1>
                {/* <h2>This is Namaste React webseries.</h2> */}
                {/* <User/> */}
                <h2>LoggedIn User :</h2>
                <h2><UserContext.Consumer>
                        { ({loggedInUser}) => <h2 className='text-lg font-bold'> {loggedInUser}</h2>}
                    </UserContext.Consumer></h2>
                <UserClass name={"ruby from class"}/>
        </>
        )
    }
}
export default About