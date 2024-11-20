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
                            <img class="rounded-full w-48" src={buger} alt="profile picture" />

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
                            <img class="rounded-full w-48 h-48 " src={pizza} alt="profile picture" />

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
                            <img class="rounded-full w-48 h-48" src={chicken} alt="profile picture" />

                        </figcaption>
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>
                    </figure>
                </NavLink>

                <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"  type="button">
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                        <figcaption class="flex items-center justify-center ">
                            <img class="rounded-full w-48 h-48" src={chicken} alt="profile picture" />

                        </figcaption>
                        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                            <p class="my-4">If you care for your time, I hands down would go with this."</p>
                        </blockquote>
                    </figure>
                </button>


            </div>





            <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                        <div class="p-4 md:p-5 text-center">
                            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">This product is coming soon</h3>
                            
                            <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">OK</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}