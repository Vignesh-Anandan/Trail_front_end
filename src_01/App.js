import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Error from "./component/Error";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router"
import About from "./component/About";
import Resmenu from "./component/Resmenu";

const Applayout =()=>{
   return <div className="layout">
    <Header />     
    <Outlet />
   </div>
};

const appRoute = createBrowserRouter([
   {
      path:"/",
      element: <Applayout />,
      children:[
         {
            path:"/",
            element: <Body />,
         },
         {
            path:"/about",
            element: <About />, 
         },
         {
            path:"/resmenu/:resid",
            element: <Resmenu />,
         },
      ],
      errorElement:<Error />,
     
   },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);