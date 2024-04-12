import React,{useEffect} from 'react'

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = React.useState(true);
     //check if online 
    // return boolean

    useEffect(() =>{
        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
        });
         window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });
    },[])

  return onlineStatus;
}

export default useOnlineStatus;