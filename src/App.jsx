import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const JobContext = createContext([]);

function App() {


  const jobs = useLoaderData();
  // console.log(jobs)

  return (


    <div className="App">

      <JobContext.Provider value={jobs}>
        <Header></Header>
        <Outlet></Outlet>
      </JobContext.Provider>

    </div>
  )
}

export default App
