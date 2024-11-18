import MainCard from "../comonen/MainCard";
import buger from '../../assets/4.png'
import pizza from '../../assets/pizza.png'
import chicken from '../../assets/chicken.png'
import { NavLink, Route, Routes } from "react-router-dom";
import PizzaView from "../Viwe/pizzaViwe";

export default function MainPage() {
    return (
        <div>


            <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                <NavLink to={'/bugermenueu'}>
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                        <figcaption class="flex items-center justify-center ">
                            <img class="rounded-full w-full h-full" src={buger} alt="profile picture" />

                        </figcaption>
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>

                    </figure>

                </NavLink>

                <NavLink to={'/pitzamenue'}>
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                        <figcaption class="flex items-center justify-center ">
                            <img class="rounded-full w-full h-full" src={pizza} alt="profile picture" />

                        </figcaption>
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>

                    </figure>
                </NavLink>
                <NavLink to={'/Chikenmenue'}>
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                        <figcaption class="flex items-center justify-center ">
                            <img class="rounded-full w-full h-full" src={chicken} alt="profile picture" />

                        </figcaption>
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>
                    </figure>
                </NavLink>


            </div>
            <Routes>

                <Route path='/pitzamenue' element={<PizzaView />} />
            </Routes>

        </div>
    )
}