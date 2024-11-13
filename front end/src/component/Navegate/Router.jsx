import { Component } from "react";
import MainPage from "../MainPage/MainPage";
import Piza from "../Menue/Piza/Pitza";

const  router=[
    {
        name:"Home",
        Component:<MainPage/>,
        path:'/home',
        key:'home'
    },
    {
        name:"About",
        Component:<Piza/>,
        path:'/piza',
        key:'home'
    },
    {
        name:"Contact",
        Component:<MainPage/>,
        path:'/home',
        key:'home'
    },
    
]

export default router;