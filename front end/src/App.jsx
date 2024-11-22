import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import burgerIcon from './assets/4.png'
import './App.css'
import MainPage from './component/MainPage/MainPage'
import OpenTime from './component/OpenTime/OpenTime'
import { router, Menue } from './component/Navegate/Router';
import { NavLink, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div class="body">
      <div className="container">
        <nav class="navbar navbar-expand-lg bg-body-warning  ">
          <div class="container-fluid">
            <span><img class="bugerIcon " src={burgerIcon} alt="" /></span>
            <span>Tasty Buger ..</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                {router.map((val, index) => (
                  <ul class="nav-link">
                    <NavLink to={val.path} style={{ textDecoration: 'none', color: 'black' }}>{val.name}</NavLink>

                  </ul>

                ))}
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>  */}
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          {router.map((val, index) => (
            <Route path={val.path} element={val.Component} />
          ))}
          {/* <Route path={'*'} element={val.Component} /> */}
          {Menue.map((menu) => (
            <Route
              key={menu.name}
              path={menu.path}
              element={menu.Component}
            />
          ))}
          <Route path={'*'} element={<MainPage/>} />
        </Routes>

        {/* <MainPage /> */}

      </div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Company, Inc</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

export default App
