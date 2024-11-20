import React from 'react';
import './Aboute.css';


function Aboute() {
    return (
        <div>
            {/* <MenueBanner img={'src/assets/bgimg.jpeg'} heding={"About Us"} /> */}
            <div className="container">
                <div className="row about-container">
                    {/* Left Section */}
                    <div className="col-lg-6 col-md-6 col-sm-12 about-left">
                        <img src="src\assets\shape-2 - Copy.png" alt="" className="img-fluid" />
                        <div className="row">
                            <div className="col-6">
                                <img className="Ab-img-1 img-fluid" src="src/assets/Ab-1.jpg" alt="" />
                            <img className="Ab-img-2 img-fluid" src="src/assets/Ab-1.jpg" alt="" />
                            
                            </div>
                            <div className="col-6">
                            </div>
                        </div>
                        <div>
                            <img className="Ab-img-3 img-fluid" src="src/assets/Ab-2.jpg" alt="" />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6 col-md-6 col-sm-12 about-right">
                        <div fontFamily={'fantasy'} className="text-center mt-4" variant="h1" gutterBottom>
                            About Us
                        </div>
                        <div className="text-center mt-3" variant="h4" gutterBottom>
                            The Cleanest, Most Delicious Vegan Cookie Dough Ever.
                        </div>
                        <div className="mt-4">
                            <div variant="body1" className="txt text-center">
                                But that you may see whence every one is born, the pleasure and pain of those who accuse him
                                I will open the whole of the praisers, and they will be discovered by the searcher of the truth and like an arch
                                I will explain the roof of the happy life.
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3 bg-opacity-10">
                            <img src="src/assets/icon-1.png" alt="" className="m-2" />
                            <img src="src/assets/icon-2.png" alt="" className="m-2" />
                            <img src="src/assets/icon-3.png" alt="" className="m-2" />
                            <img src="src/assets/icon-4.png" alt="" className="m-2" />
                            <img src="src/assets/icon-5.png" alt="" className="m-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboute;
