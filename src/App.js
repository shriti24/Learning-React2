   import React ,{lazy, Suspense, useEffect, useState}from 'react';
   import ReactDOM from 'react-dom/client';
   import Header from './components/Header';
   import Body from './components/Body';
   import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
   import About from './components/About';
   import Error from './components/Error';
   import ContactUs from './components/ContactUs';
   import RestaurantMenu from './components/RestaurantMenu';
   import UserContext from './utils/UserContext';
   import { Provider } from 'react-redux';
   import appStore from './utils/appStore';
   import Cart from './components/Cart';
   
   /**
    * 
    * Header - 
    *   Logo , 
    *   nav item, 
    *   notifications, 
    * Body - 
    *   Search, 
    *   Restaurant Crds container 
    *       Restaurant Crds  -img, Name of rest, cuisine, star rating.
    * Footer-        
    *   copyrights
    *   contactUs,
    *   About
    * 
    */
   
 //implementing code splitting for instamart.

 const Instamart = lazy(()=> import("./components/Instamart"));

   const AppLayout = () => {
     const [userInfo, setUserInfo] = useState({});

     useEffect(()=>{
          //Authentication Api calls and set the userInfo.
          const data={
               name: 'Shriti B',
               place: 'Dandeli',
          }
          setUserInfo(data);
     },[]);
          return(
          <Provider store={appStore}>
          <UserContext.Provider value={{loggedInUser: userInfo.name , setUserInfo}}>
          <div className='app'>
               <Header/>
               <Outlet/>  {/** outlet component from router-dom acccess then children compoemnet and replaces with the path that we call */}
          </div>
          </UserContext.Provider>
          </Provider>
          )
  
    };
   
   const appRouter = createBrowserRouter([{
          path:"/",
          element:<AppLayout/>,
          errorElement:<Error/>,
          children:[
               {
                     path:"/",
                    element:<Body/>,
               },
               {    path:"/about",
                    element:<About/>
               },
               {    path:"/restaurant/:resId",
                    element:<RestaurantMenu/>
               },

               {
                    path:"/contact",
                    element:<ContactUs/>
               },
               {
                    path:"/cart",
                    element:<Cart/>
               },
               {
                    path:"/instamart",
                    element:<Suspense fallback ={<h1>Loading....</h1>}>  <Instamart/></Suspense>
               }
          ],

     } ,
     ]);

    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter}/>);
