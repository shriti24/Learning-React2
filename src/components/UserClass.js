import React from 'react';

class UserClass extends React.Component{
    //first constructor is called and then render method is called. 
    constructor(props){
        super(props);

        this.state={
            userInfo :{
                name: "",
                location: ""
            }
        }
        console.log("contructor child");
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/shriti');
        const jsonData =  await data.json();
        console.log(jsonData);
        this.setState=({userInfo:jsonData})
        console.log("componentDidMount child");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate child");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount child");
    }
    render(){
    const {name, location , avatar_url} = this.state.userInfo;

        return(
                    <div>
                <img src={avatar_url} />        
                <h1>{name}</h1>
                <h2>shriti@gmail.com</h2>
                <h3>XXXXXXXXX9898</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}
export default UserClass;