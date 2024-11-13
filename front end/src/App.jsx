import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import burgerIcon from './assets/4.png'
import './App.css'
import MainPage from './component/MainPage/MainPage'
import OpenTime from './component/OpenTime/OpenTime'
import router from './component/Navegate/Router'
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
                    <NavLink to={val.path}>{val.name}</NavLink>

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
        </Routes>

        {/* <MainPage /> */}

      </div>
    </div>
  )
}

export default App
