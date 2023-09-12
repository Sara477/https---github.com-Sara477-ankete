import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";

import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";

const router= createBrowserRouter([
  
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Navigate to='/'/>
            },
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path:'/surveys',
                element:<Surveys/>
            },
        ]
        
    } ,
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'signup',
                element:<Signup/>
            },
        ]
    
    }
])

export default router