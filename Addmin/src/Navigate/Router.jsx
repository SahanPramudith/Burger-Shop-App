import { Component } from "react";
import Buger from "../component/SavePostBuger/Buger";
import Chiken from "../component/SavePostChicken/Chicken";
import Piza from "../component/SavePostPitza/Pitza";
import View from "../component/Viwe/Viwe";
import BugerViwe from "../component/Viwe/bugerViwe";
import PizzaView from "../component/Viwe/pizzaViwe";
import ChikenView from "../component/Viwe/chickenViwe";

export const router = [
    {
        path: '/viwe',
        name: "Viwe",
        Component: <View />,
        key: "Viwe"

    }

];

export const navroute = [
    {
        path: '/pitza',
        name: "Pitza",
        Component: <Piza />,
        key: "pitza"
    },
    {
        path: '/buger',
        name: "Buger",
        Component: <Buger />,
        key: "buger"
    },
    {
        path: '/Chiken',
        name: "Chiken",
        Component: <Chiken />,
        key: "Chiken"
    },

]
export const menueroute = [
    {
        path: '/pitzamenue',
        Component: <PizzaView />,
        key: "pitza"
    },
    {
        path: '/bugermenueu',
        Component: <BugerViwe />,
        key: "buger"
    },
    {
        path: '/Chikenmenue',
        Component: <ChikenView />,
        key: "Chiken"
    },

]


