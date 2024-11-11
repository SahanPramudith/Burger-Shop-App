import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import burgerIcon from './assets/4.png'
import './App.css'
import MainPage from './component/MainPage/MainPage'
import OpenTime from './component/OpenTime/OpenTime'

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
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Pricing</a>
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
        <MainPage />
        
      </div>
    </div>
  )
}

export default App
