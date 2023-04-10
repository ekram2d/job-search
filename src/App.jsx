import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (


    <div className="App">
     
    <Header></Header>
    <Outlet></Outlet>
   
    </div>
  )
}

export default App
