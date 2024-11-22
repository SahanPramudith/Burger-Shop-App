import Buger from '../../assets/bugerBanner.png'
import Buger1 from '../../assets/bugerBaner2.png'
import React, { useEffect } from 'react';
import './Main.css';
import Aos from 'aos'
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import MenueList from './MenueList/MenueList';
import OpenTime from '../OpenTime/OpenTime';
import Carousel from './Carousel/Carousel';

import Piza from '../Menue/Piza/Pitza';
import Pizza from '../Menue/Piza/Pitza';
import Chicken from '../Menue/Chicken/Chicken';


export default function MainPage() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <dir>
            <div className="container col-xxl-8  py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-6 " data-aos="fade-left" >
                        <img
                            src={Buger}
                            alt="Responsive Banner"
                            className="responsive-img "
                        />
                    </div>
                    <div className="col-lg-6">

                        <h1 className="font display-3 fw-bold text-body-emphasis 2h-2 mb-1" data-aos="fade-down-right">
                            "Deliciously Crafted Burgers, Just for You!"
                        </h1>
                        <p className="lead" data-aos="zoom-out-up">

                            At Burger Bliss, we believe that every burger should be a masterpiece. That's why we use only the freshest ingredients and house-made sauces, all crafted by hand to bring you a truly unforgettable experience. From classic favorites to adventurous flavors, our burgers are made to satisfy all your cravings. Whether you're here for a quick bite, a hearty meal, or a family night out, we have something for everyone!
                        </p>
                        <h3 class=" font1 m-5" data-aos="zoom-out-up">Visit Us Today!
                            Hungry yet?  join us in-store for a relaxing dining experience.</h3>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        </div>
                    </div>
                </div>
            </div>
            <MenueList />
            <OpenTime />
            <Carousel /><br></br>

            
            <Chicken/>

        </dir>
    )
}