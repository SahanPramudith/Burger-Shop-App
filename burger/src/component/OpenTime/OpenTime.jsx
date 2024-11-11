import React from 'react';
import './OpenTime.css';

export default function OpenTime() {
   


    return (
        <div className="container py-5">
            <div className="row">
                {/* Left Column */}
                <div data-aos="zoom-out-up" className="col-12 col-md-6 p-3 d-flex flex-column justify-content-center" style={{ border: '2px solid grey' }}>
                    <h5 className="btxt-2">Enjoy Our Foods From <br />6 Days In a Week</h5>

                    <div className="banar-1 d-flex align-items-center ">
                        <img className="banner-img-1 " src="src\assets\baner - Copy.png" alt="" style={{ width: '650px' }} />
                        <h1 className="btxt-1 mb-0">Monday - Friday -- 09am-6pm</h1>
                    </div>

                    <div className="banar-1 d-flex align-items-center my-3">
                        <img className="banner-img-1 " src="src\assets\baner - Copy.png" alt="" style={{ width: '350px' }} />
                        <h1 className="btxt-1 mb-0">Saturday ------------ 08am-7pm</h1>
                    </div>

                    <div className="banar-1 d-flex align-items-center my-3">
                        <img className="banner-img-1 " src="src\assets\baner - Copy.png" alt="" style={{ width: '350px' }} />
                        <h1 className="btxt-1 mb-0">Sunday --------------- Closed</h1>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div data-aos="zoom-out-up" className="banner-2">
                        {/* Additional content or images can be placed here */}
                    </div>
                </div>
            </div>
        </div>
    );
}
