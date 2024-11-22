import { Component } from "react";
import MainPage from "../MainPage/MainPage";
import Piza from "../Menue/Piza/Pitza";
import Aboute from "../Aboute/Aboute";
import Contact from "../Contact page/Contact";
import Pizza from "../Menue/Piza/Pitza";
import Chicken from "../Menue/Chicken/Chicken";
import Buger from "../Menue/Buger/Buger";

export const router = [
    {
        name: "Home",
        Component: <MainPage />,
        path: '/home',
        key: 'home'
    },
    {
        name: "About",
        Component: <Aboute />,
        path: '/aboute',
        key: 'aboute'
    },
    {
        name: "Contact",
        Component: <Contact />,
        path: '/contact',
        key: 'Contact'
    },


];

export const Menue = [
    {
        name:"Pizza",
        path:'/pizza',
        Component:<Pizza/>
    },
    {
        name:"Buger",
        path:'/buger',
        Component:<Buger/>
    },
    {
        name:"Chicken",
        path:'/chicken',
        Component:<Chicken/>
    },
    
]

