import React from 'react';
import './Aboute.css';

const Aboute = () => {
    return (
        <div className="container">
            {/* Parent container for responsiveness */}
            <div className="row align-items-center">
                {/* Left Column */}
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <img
                            src="your-image-1.jpg"
                            alt="Description 1"
                            className="img-fluid rounded-circle mb-3"
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '140px' }}
                        />
                        <img
                            src="your-image-2.jpg"
                            alt="Description 2"
                            className="img-fluid"
                            style={{ marginTop: '-50px', marginLeft: '20px', maxWidth: '80%' }}
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                    <img
                        src="your-image-3.jpg"
                        alt="Description 3"
                        className="img-fluid"
                        style={{
                            borderRadius: '140px 140px 0px 140px',
                            height: 'auto',
                            margin: '15px',
                        }}
                    />
                    <div className="opacity-50 mt-2">Some text or other content here</div>
                </div>
            </div>
        </div>
    );
};

export default Aboute;
