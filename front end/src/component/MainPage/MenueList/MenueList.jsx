import { Navigate, NavLink } from 'react-router-dom';
import './MenueList.css';


export default function MenueList() {
    return (
        <dev >
            <div class="">
                <div data-aos="zoom-out-up" className="container py-5 px-4" style={{
                    backgroundImage: "url('src/assets/bugerBanner.png')", //  
                }}>
                    <div className="row g-4 ">

                        <div className="col-12 col-md-4 " data-aos="zoom-out-up">
                            <NavLink to={'/pizza'} style={{ textDecoration: 'none' ,color:'black'}}>
                                <div className="munue d-flex align-items-center p-3" style={{ backgroundColor: '#F5F7F8', border: '2px solid grey', borderRadius: '30px' }}>

                                    <img className='icon' src="src/assets/icon-1.png" alt="Pizza" style={{ width: '75px' }} />

                                    <h1 className="txt ms-3 flex-grow-1">Pizza</h1>

                                    <img className='icon' style={{ width: '50px', height: '50px' }} src="src/assets/arrow-2.png" alt="Arrow" />

                                </div>
                            </NavLink>
                        </div>


                        <div className="col-12 col-md-4 ">
                            <NavLink to={'/buger'} style={{ textDecoration: 'none' ,color:'black'}}>
                                <div data-aos="zoom-out-up" className="munue d-flex align-items-center p-3" style={{ backgroundColor: '#F5F7F8', border: '2px solid grey', borderRadius: '30px' }}>
                                    <img className='icon' src="src/assets/icon-2.png" alt="Burger" style={{ width: '75px' }} />
                                    <h1 className="txt ms-3 flex-grow-1">Burger</h1>

                                    <img style={{ width: '50px', height: '50px' }} src="src/assets/arrow-2.png" alt="Arrow" />

                                </div>
                            </NavLink>
                        </div>

                        <div data-aos="zoom-out-up" className="col-12 col-md-4">
                            <div className="munue d-flex align-items-center p-3" style={{ backgroundColor: '#F5F7F8', border: '2px solid grey', borderRadius: '30px' }}>
                                <img className='icon' src="src/assets/icon-3.png" alt="Bread" style={{ width: '75px' }} />
                                <h1 className="txt ms-3 flex-grow-1">Bread</h1>

                                <img style={{ width: '50px', height: '50px' }} src="src/assets/arrow-2.png" alt="Arrow" />

                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-out-up" className="row g-4 mt-4">
                        <div className="col-12 col-md-4">
                            <div className="munue d-flex align-items-center p-3" style={{ backgroundColor: '#F5F7F8', border: '2px solid grey', borderRadius: '30px' }}>
                                <img className='icon' src="src/assets/icon-4.png" alt="Seafood" style={{ width: '75px' }} />
                                <h1 className="txt ms-3 flex-grow-1">Seafood</h1>

                                <img style={{ width: '50px', height: '50px' }} src="src/assets/arrow-2.png" alt="Arrow" />

                            </div>
                        </div>

                        <div data-aos="zoom-out-up" className="col-12 col-md-4">
                            <div className="munue d-flex align-items-center p-3" style={{ backgroundColor: '#F5F7F8', border: '2px solid grey', borderRadius: '30px' }}>
                                <img className='icon' src="src/assets/icon-5.png" alt="Coffee" style={{ width: '75px' }} />
                                <h1 className="txt ms-3 flex-grow-1">Coffee</h1>

                                <img style={{ width: '50px', height: '50px' }} src="src/assets/arrow-2.png" alt="Arrow" />

                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <NavLink to={'/chicken'} style={{ textDecoration: 'none' ,color:'black'}}>
                                <div className="munue d-flex align-items-center p-3" style={{ backgroundColor: '#F5F7F8', border: '2px solid grey', borderRadius: '30px' }}>
                                    <img className='icon' src="src/assets/icon-6.png" alt="Chicken" style={{ width: '75px' }} />
                                    <h1 className="txt ms-3 flex-grow-1">Chicken</h1>

                                    <img style={{ width: '50px', height: '50px' }} src="src/assets/arrow-2.png" alt="Arrow" />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </dev >
    )
}