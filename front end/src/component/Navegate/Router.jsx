import { Component } from "react";
import MainPage from "../MainPage/MainPage";
import Piza from "../Menue/Piza/Pitza";
import Aboute from "../Aboute/Aboute";
import Contact from "../Contact page/Contact";

const  router=[
    {
        name:"Home",
        Component:<MainPage/>,
        path:'/home',
        key:'home'
    },
    {
        name:"About",
        Component:<Aboute/>,
        path:'/aboute',
        key:'aboute'
    },
    {
        name:"Contact",
        Component:<Contact/>,
        path:'/contact',
        key:'Contact'
    },
    
]

export default router;