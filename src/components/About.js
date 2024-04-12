import React from 'react';
import User from './User';
import UserClass from './UserClass';

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
                <UserClass name={"ruby from class"}/>
        </>
        )
    }
}
export default About