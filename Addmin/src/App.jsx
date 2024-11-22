import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'flowbite';
import 'flowbite-react';
import 'flowbite/dist/flowbite.min.js';
import SideBar from './SideBar/SideBar';
import LoginFrom from './Login From/Loginform';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginFrom/>
      <SideBar/>
    </div>
  )
}

export default App
